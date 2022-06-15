const mongoose = require("mongoose");
const quoteSchema = new mongoose.Schema(
  {
    quote: { type: String, required: true, unique: true },
    likes: { type: Number },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Quote", quoteSchema);
