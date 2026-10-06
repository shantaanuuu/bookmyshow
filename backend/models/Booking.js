const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    showId: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
    seats: [{ seatNo: String, type: { type: String, enum: ["Regular", "Premium", "VIP"] }, price: Number }],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, default: "Dummy Payment" },
    paymentStatus: { type: String, enum: ["Pending", "Paid", "Refunded"], default: "Pending" },
    bookingStatus: { type: String, enum: ["Confirmed", "Cancelled"], default: "Confirmed" },
    transactionId: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
