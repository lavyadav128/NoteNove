import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment"; // Ensure this exports your backend base URL

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: server,
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const res = await client.post("/api/register", { name, username, password });

      if (res.status === httpStatus.CREATED) {
        const { token, username: registeredUsername } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", registeredUsername); // ✅ Save username
        router("/dashboard"); // Optional: Redirect after registration
        return res.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await client.post("/api/login", { username, password });

      if (res.status === httpStatus.OK) {
        const { token, username: loggedInUsername } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", loggedInUsername); // ✅ Save username
        router("/dashboard"); // ✅ Redirect after login
      }
    } catch (err) {
      throw err;
    }
  };

  // Axios request interceptor to include token
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const data = {
    setUserData,
    handleRegister,
    handleLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
