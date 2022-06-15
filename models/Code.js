const mongoose = require("mongoose");
const codeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String },
    language: { type: String },
    code: { type: String },
    views: { type: Number },
    comment: { type: Number },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Code", codeSchema);
