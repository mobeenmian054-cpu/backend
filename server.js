import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/Auth.js";
import bookingRoutes from "./Routes/Bookingroutes.js"


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://Mobeen:Mobeen@cluster0.nzopyhk.mongodb.net/appointmentsdata")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes); 

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
