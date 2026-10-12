const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const accounts = [
  { name: "BookMyShow Admin", email: "admin@bookmyshow.local", password: "Admin@123", role: "admin" },
  { name: "BookMyShow Staff", email: "staff@bookmyshow.local", password: "Staff@123", role: "staff" },
  { name: "Demo Customer", email: "user@bookmyshow.local", password: "User@123", role: "user" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    for (const account of accounts) {
      const password = await bcrypt.hash(account.password, 10);
      await User.findOneAndUpdate({ email: account.email }, { ...account, password }, { upsert: true, new: true, setDefaultsOnInsert: true });
    }
    console.log("Admin and staff demo accounts are ready.");
  } catch (error) {
    console.error("Could not seed demo accounts:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
