// Import required modules
import axios from "axios";                           // Axios for HTTP requests
import httpStatus from "http-status";               // Standard HTTP status codes
import { createContext, useState } from "react";    // React context and state
import { useNavigate } from "react-router-dom";     // Hook for programmatic navigation
import server from "../environment";                // Your backend base URL (should export a string)

// Create a new context for authentication
export const AuthContext = createContext({});

// Create an axios instance with base URL
const client = axios.create({
  baseURL: `${server}`,                             // e.g., "http://localhost:3000"
});

// Define the AuthProvider component to wrap around app
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);   // State to hold logged-in user info (if needed)
  const router = useNavigate();                     // React Router navigation function

  // Handle user registration
  const handleRegister = async (name, username, password) => {
    try {
      // Send POST request to /api/register
      const res = await client.post("/api/register", { name, username, password });

      // If registration is successful
      if (res.status === httpStatus.CREATED) {
        const { token, username: registeredUsername } = res.data;

        // Save token and username in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("username", registeredUsername); // ✅ Save username

        // Redirect to dashboard (optional)
        router("/dashboard");

        // Return success message to show in UI
        return res.data.message;
      }
    } catch (err) {
      // Re-throw error to be handled in UI
      throw err;
    }
  };

  // Handle user login
  const handleLogin = async (username, password) => {
    try {
      // Send POST request to /api/login
      const res = await client.post("/api/login", { username, password });

      // If login is successful
      if (res.status === httpStatus.OK) {
        const { token, username: loggedInUsername } = res.data;

        // Save token and username in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("username", loggedInUsername); // ✅ Save username

        // Redirect to dashboard
        router("/dashboard");
      }
    } catch (err) {
      // Re-throw error to be handled in UI
      throw err;
    }
  };

  // Axios request interceptor to add Authorization header automatically
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");      // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Bearer token to headers
    }
    return config;
  });

  // Provide data and functions to context consumers
  const data = {
    setUserData,
    handleRegister,
    handleLogin,
  };

  // Wrap children with AuthContext provider
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
