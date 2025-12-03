import Booking from "../models/booking.js";

// 🟢 Create new booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 🟢 Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }); // latest first
    res.json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking)
      return res.status(404).json({ success: false, message: "Booking not found" });

    res.json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Update booking
export const updateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // validate while updating
    });

    if (!updated)
      return res.status(404).json({ success: false, message: "Booking not found" });

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 🟢 Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ success: false, message: "Booking not found" });

    res.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
