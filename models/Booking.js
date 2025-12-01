import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    nationality: { type: String, required: true },

    passportNumber: { type: String, required: true, unique: true },
    passportExpiry: { type: Date, required: true },

    email: { type: String, required: true, match: /.+\@.+\..+/ },
    phone: { type: String, required: true },
    address: { type: String, required: true },

    visaType: {
      type: String,
      enum: ["Tourist", "Student", "Business", "Family", "Work"],
      required: true,
    },
    countryOfTravel: { type: String, required: true },
   preferredDate: { type: Date, required: true },
    
    vfsCenter: { type: String, required: true },

    numberOfApplicants: { type: Number, default: 1 },
    specialRequest: { type: String },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
