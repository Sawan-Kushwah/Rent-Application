import mongoose, {mongo, Schema, Types} from "mongoose";

const schema = new Schema(
  {
    room: [
      {type: mongoose.Schema.Types.ObjectId, ref: "rooms", }
    ],
    name: {type: String, require: true },
    phone: [
      {type: String, require: true }
    ],
    email: {type: String, require: true }
  },
  {timestamps: true}
)

const Owner = mongoose.model.Owner || mongoose.model("Owner", schema);

export default Owner;