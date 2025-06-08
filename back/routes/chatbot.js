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

    const model = genAI.getGenerativeModel({model: "gemini-pro" }); // or gemini-1.5-pro

    const result = await model.generateContent(message);

    const reply = result.response.text(); // Extract the plain response text

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini AI Error:", error);
    res.status(500).json({ error: "Something went wrong with Gemini AI." });
  }
});

export default router;
