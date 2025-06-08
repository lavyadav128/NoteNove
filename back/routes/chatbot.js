import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

// Initialize with API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

router.post("/chatbot", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Valid message is required" });
    }

    // For Gemini 1.5 (latest)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest", // Current recommended model
      // Alternatively try: "gemini-1.5-pro-latest" or "gemini-1.0-pro"
    });

    // Start chat session (better for conversations)
    const chat = model.startChat({
      history: [], // Add previous messages here if needed
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.9,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
    
  } catch (error) {
    console.error("Gemini Error:", error);
    
    // Enhanced error handling
    const errorInfo = {
      message: error.message,
      status: error.status || 500,
      ...(error.response?.data ? { details: error.response.data } : {})
    };

    res.status(errorInfo.status).json({
      error: "AI service unavailable",
      details: errorInfo
    });
  }
});

export default router;