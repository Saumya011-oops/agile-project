const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Verifies the JWT sent in the Authorization header and attaches the
// decoded user to req.user. Any route that needs to know "who is asking"
// (orders, profile, etc.) should run this first.
module.exports = function fetchuser(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : authHeader; // also accept a bare token, just in case

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Please log in.' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // { id: <userId> }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token. Please log in again.' });
  }
};
