import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';

import userRoutes from './routes/users.routes.js';
import purchaseRoutes from './routes/purchase.js';
import chatbotRoutes from './routes/chatbot.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3001',
    'https://notess-ei6q.onrender.com',
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', purchaseRoutes);
app.use('/api', chatbotRoutes);


app.get("/", (req, res) => {
  console.log("Ping received at", new Date());
  res.send("Backend is alive!");
});


// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Razorpay order creation endpoint
app.post('/api/create-order', async (req, res) => {
  const { amount, receipt } = req.body;

  const options = {
    amount: amount * 100, // Convert ₹ to paise
    currency: 'INR',
    receipt: receipt || `receipt_${Date.now()}`,
    payment_capture: 1, //  Auto-capture enabled
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// MongoDB connection
const dbUrl = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  }
}

// Start server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
