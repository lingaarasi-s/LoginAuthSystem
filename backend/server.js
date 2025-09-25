const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sync Database
sequelize.sync().then(() => console.log("✅ Database synced"));

// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
