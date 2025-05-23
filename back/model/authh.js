import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    // Check multiple possible locations for the token
    const token = req.headers.authorization?.split(' ')[1] || 
                 req.headers.Authorization?.split(' ')[1] ||
                 req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    console.log('Token received:', token); // Debug log

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default auth;
