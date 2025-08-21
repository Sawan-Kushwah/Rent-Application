import mongoose, { Schema, Types } from "mongoose";

const schema = new Schema(
  {
    room: [
      { type: mongoose.Schema.Types.ObjectId, ref: "rooms" }
    ],
    name: { type: String, require: true },
    phone: [
      { type: Number, require: true }
    ],
    email: { type: String, require: true }
  },
  { timestamps: true }
)

const Owner = mongoose.models.Owner || mongoose.model("Owner", schema);

export default Owner;