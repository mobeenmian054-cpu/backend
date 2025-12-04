import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/bookingroutes.js";

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS setup
app.use(cors({
  origin: 'https://frountend-seven.vercel.app',
  credentials: true
}));

// ✅ Handle preflight requests
app.options('*', cors({
  origin: 'https://frountend-seven.vercel.app',
  credentials: true
}));

// MongoDB Connection
mongoose.connect("mongodb+srv://Mobeen:Mobeen@cluster0.nzopyhk.mongodb.net/appointmentsdata")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
