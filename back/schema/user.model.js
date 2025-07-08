// Import Mongoose and Schema constructor from mongoose package
import mongoose, { Schema } from "mongoose";

// Define the schema for a User document
const userScheme = new Schema(
    {
        // Name of the user (required)
        name: { type: String, required: true },

        // Username (must be unique and required for login)
        username: { type: String, required: true, unique: true },

        // Hashed password (required for authentication)
        password: { type: String, required: true },

        // Optional JWT token (can be used for sessions or refresh tokens)
        token: { type: String }
    }
);

// Create a Mongoose model named "User" using the schema
const User = mongoose.model("User", userScheme);

// Export the model so it can be used in other parts of the app
export { User };
