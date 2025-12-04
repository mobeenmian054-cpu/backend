import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/bookingroutes.js";

// Load environment variables
app.use(cors())
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS setup: allow only your frontend (both local and deployed)
// app.use(cors({
//   origin: [
//     'http://localhost:5173',                 // Local frontend
//     'https://frountend-seven.vercel.app'     // Deployed frontend
//   ],
//   credentials: true // if you are sending cookies/auth headers
// }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
