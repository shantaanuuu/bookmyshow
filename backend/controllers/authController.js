const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, role: user.role });
const createToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required." });
    if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters." });
    if (await User.findOne({ email: email.toLowerCase() })) return res.status(409).json({ message: "An account with this email already exists." });
    const user = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ message: "Account created successfully.", user: publicUser(user), token: createToken(user) });
  } catch (error) {
    res.status(500).json({ message: "Could not create your account." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Invalid email or password." });
    res.json({ message: "Login successful.", user: publicUser(user), token: createToken(user) });
  } catch (error) {
    res.status(500).json({ message: "Could not log you in." });
  }
};

exports.me = async (req, res) => res.json({ user: publicUser(req.user) });
