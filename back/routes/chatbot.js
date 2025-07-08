import express from "express";                       // Express framework for routing
import dotenv from "dotenv";                         // To load environment variables from .env file
import { GoogleGenerativeAI } from "@google/generative-ai"; // Google Gemini SDK for accessing generative AI

// Load environment variables
dotenv.config();

// Create a new Express router
const router = express.Router();

// Initialize Gemini API client with your API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

// Define POST route for chatbot interaction
router.post("/chatbot", async (req, res) => {
  try {
    // Extract message from request body
    const { message } = req.body;

    // Validate message: it must be a non-empty string
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Valid message is required" });
    }

    // Get the Gemini 1.5 Flash model (fast and latest as of now)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest", // Current recommended model
      // Alternatively try: "gemini-1.5-pro-latest" or "gemini-1.0-pro"
    });

    // Start a new chat session with the model
    const chat = model.startChat({
      history: [], // Empty history (for one-off requests). Add past messages if building a multi-turn chat.
      generationConfig: {
        maxOutputTokens: 2000,  // Limit on output tokens (length of AI response)
        temperature: 0.9,       // Controls randomness (0 = deterministic, 1 = more creative)
      },
    });

    // Send user's message to the Gemini model
    const result = await chat.sendMessage(message);

    // Extract the text response from the model's reply
    const response = await result.response;
    const text = response.text();

    // Respond to client with the AI-generated text
    res.status(200).json({ reply: text });
    
  } catch (error) {
    // Log any errors for debugging
    console.error("Gemini Error:", error);
    
    // Enhanced error information structure
    const errorInfo = {
      message: error.message,
      status: error.status || 500,
      ...(error.response?.data ? { details: error.response.data } : {}) // Include API error details if available
    };

    // Respond with error information
    res.status(errorInfo.status).json({
      error: "AI service unavailable",
      details: errorInfo
    });
  }
});

// Export the router so it can be used in your main app
export default router;
