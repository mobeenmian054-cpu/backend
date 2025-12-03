import express from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingcontroller.js";

const router = express.Router();

// 🔹 All booking routes
router.post("/", createBooking);       // Create new booking
router.get("/", getBookings);          // Get all bookings
router.get("/:id", getBookingById);    // Get single booking by ID
router.put("/:id", updateBooking);     // Update booking
router.delete("/:id", deleteBooking);  // Delete booking

export default router;
