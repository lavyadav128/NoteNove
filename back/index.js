// Import necessary modules
import express from 'express';                  // Express framework
import cors from 'cors';                        // CORS middleware for cross-origin requests
import mongoose from 'mongoose';                // Mongoose for MongoDB connection
import dotenv from 'dotenv';                    // dotenv to load environment variables
import Razorpay from 'razorpay';                // Razorpay SDK for handling payments

// Import route handlers
import userRoutes from './routes/users.routes.js';
import purchaseRoutes from './routes/purchase.js';
import chatbotRoutes from './routes/chatbot.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express app instance
const app = express();

// ----------------- MIDDLEWARE -----------------

// CORS configuration to allow requests from specific origins
app.use(cors({
  origin: [
    'http://localhost:3001',                    // Local frontend
    'https://notess-ei6q.onrender.com',         // Deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],    // Allowed HTTP methods
  credentials: true,                            // Allow credentials (cookies, headers)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// ----------------- ROUTES -----------------

// Mount user-related routes at /api
app.use('/api', userRoutes);

// Mount purchase-related routes at /api
app.use('/api', purchaseRoutes);

// Mount chatbot-related routes at /api
app.use('/api', chatbotRoutes);

// Health check route — confirms backend is running
app.get("/", (req, res) => {
  console.log("Ping received at", new Date());
  res.send("Backend is alive!");
});

// ----------------- RAZORPAY PAYMENT -----------------

// Create a Razorpay instance using keys from environment variables
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Endpoint to create a Razorpay order
app.post('/api/create-order', async (req, res) => {
  const { amount, receipt } = req.body;

  const options = {
    amount: amount * 100,                       // Convert ₹ to paise (Razorpay requires paise)
    currency: 'INR',                            // Indian currency
    receipt: receipt || `receipt_${Date.now()}`, // Optional custom receipt ID
    payment_capture: 1,                         // Auto-capture payment immediately
  };

  try {
    // Create order using Razorpay
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);               // Return the created order
  } catch (error) {
    // Handle and log any errors
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// ----------------- DATABASE CONNECTION -----------------

// Get MongoDB connection string from environment variables
const dbUrl = process.env.MONGO_URI;

// Connect to MongoDB using async/await
async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (err) {
    // Log and exit if connection fails
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  }
}

// ----------------- START SERVER -----------------

// Define port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Connect to DB first, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
