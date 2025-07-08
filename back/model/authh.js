// Import the jsonwebtoken package to handle JWT operations
import jwt from 'jsonwebtoken';

// Define the authentication middleware function
const auth = (req, res, next) => {
  try {
    // Attempt to extract token from the Authorization header (both lowercase and uppercase), or from cookies
    const token = req.headers.authorization?.split(' ')[1] || // Checks for "authorization" header (e.g., "Bearer <token>")
                 req.headers.Authorization?.split(' ')[1] || // Handles case where header might be "Authorization" (capital A)
                 req.cookies?.token;                         // Alternatively, check for token in cookies (if using cookie-based auth)

    // If no token was found, respond with 401 Unauthorized
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Log the received token for debugging (optional but helpful during development)
    console.log('Token received:', token); 

    // Verify the token using the secret key stored in environment variable JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If valid, attach decoded payload (usually user info) to the request object
    req.user = decoded;

    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    // Log the error for debugging
    console.error('Auth error:', error);

    // If the token has expired, send a specific error message
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }

    // For any other error (e.g., invalid signature), respond with generic invalid token message
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Export the middleware so it can be used in other parts of the app
export default auth;
