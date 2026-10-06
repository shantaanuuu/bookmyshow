const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    theatreId: { type: mongoose.Schema.Types.ObjectId, ref: "Theatre", required: true },
    screenId: { type: mongoose.Schema.Types.ObjectId, required: true },
    screenName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    prices: {
      regular: { type: Number, required: true },
      premium: { type: Number, required: true },
      vip: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);
