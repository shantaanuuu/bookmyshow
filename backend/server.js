const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "CineVault API is running" });
});

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
