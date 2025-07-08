// Import the Router class from Express to define modular route handlers
import { Router } from "express";

// Import the login and register controller functions
import { login, register } from "../model/user.controller.js";

// Create a new router instance
const router = Router();

// Define the POST route for user login
router.route("/login").post(login); // Calls `login` controller when POST request is made to /login

// Define the POST route for user registration
router.route("/register").post(register); // Calls `register` controller when POST request is made to /register

// Export the router so it can be mounted in the main app
export default router;
