import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; //  You forgot this import
import dotenv from 'dotenv';     //  To load environment variables
import userRoutes from './routes/users.routes.js'; // Make sure this exists and is correct

import purchaseRoutes from './routes/purchase.js';


dotenv.config(); // Load .env variables

const app = express();

//  Middleware
app.use(cors({
  origin: "http://localhost:3001", // Allow requests from your React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']  // Add this

}));
app.use(express.json());


//  Routes
app.use("/api", userRoutes); // Example: POST http://localhost:3000/api/register
app.use('/api', purchaseRoutes);



//  MongoDB Connection
const dbUrl = process.env.MONGO_URL;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  }
}

//  Start Server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
