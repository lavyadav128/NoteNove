import httpStatus from "http-status";
import { User } from "../schema/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ---------------------- LOGIN FUNCTION ----------------------
const login = async (req, res) => {
  // Extract username and password from the request body
  const { username, password } = req.body;

  // Check if both fields are provided; if not, return 400 Bad Request
  if (!username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide all fields." });
  }

  try {
    // Find a user in the database by username
    const user = await User.findOne({ username });

    // If no user is found, return 404 Not Found
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    // Compare the plain password with the hashed password stored in DB
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // If the password doesn't match, return 401 Unauthorized
    if (!isPasswordCorrect) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    // Create a JWT token containing the user's ID and username, valid for 7 days
    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send back a 200 OK response with the token and user details
    return res.status(httpStatus.OK).json({
      token,                 // JWT token for authentication
      username: user.username, // Username of the logged-in user
      name: user.name,         // Name of the logged-in user
    });
  } catch (e) {
    // If any error occurs during the process, return 500 Internal Server Error
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Error: ${e.message}` });
  }
};

// ---------------------- REGISTER FUNCTION ----------------------
const register = async (req, res) => {
  // Extract name, username, and password from the request body
  const { name, username, password } = req.body;

  // Check if all required fields are provided; if not, return 400 Bad Request
  if (!name || !username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide all fields." });
  }

  try {
    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });

    // If such user exists, return 409 Conflict
    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    // Hash the password with a salt round of 10 for secure storage
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document with the hashed password
    const newUser = new User({ name, username, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.sign(
      { _id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send back a 201 Created response with success message and token
    return res.status(httpStatus.CREATED).json({
      message: "User registered",  // Confirmation message
      token,                       // JWT token for the newly registered user
      username: newUser.username, // Username of the new user
      name: newUser.name,         // Name of the new user
    });
  } catch (e) {
    // If any error occurs during the process, return 500 Internal Server Error
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Error: ${e.message}` });
  }
};

// Export both login and register functions for use in routes
export { login, register };
