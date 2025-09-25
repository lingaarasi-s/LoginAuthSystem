const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "secretkey"); // use env variable in production
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid or expired token." });
  }
}

module.exports = authMiddleware;
