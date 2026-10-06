const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ") && req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Authentication required." });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User no longer exists." });
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access required." });
  next();
};

exports.allowRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ message: "You do not have access to this area." });
  next();
};
