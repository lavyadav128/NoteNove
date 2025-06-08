import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

// ✅ Initialize Gemini SDK
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

// ✅ POST /api/chatbot
router.post("/chatbot", async (req, res) => {
  try {
    const { message } = req.body;

    // You must pass message as an array if it's a string
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent([message]); // ✅ Pass message in array

    const response = await result.response; // ⛔ Optional: needed in some SDK versions
    const reply = response.text();          // ✅ Extract plain text response

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini AI Error:", error);
    res.status(500).json({
      error: "Something went wrong with Gemini AI.",
      details: error.message,
    });
  }
});

export default router;
