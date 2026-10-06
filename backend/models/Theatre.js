const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rows: { type: Number, required: true, min: 1 },
  seatsPerRow: { type: Number, required: true, min: 1 },
});

const theatreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    screens: [screenSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theatre", theatreSchema);
