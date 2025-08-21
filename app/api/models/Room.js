import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "owners",
      require: true
    },
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    avaliableFor: {
      type: String,
      require: true
    },
    electricityCharges: {
      type: Number,
      require: true
    },
    parking: {
      type: Boolean,
      require: true
    },
    waterChages: {
      type: Number,
      require: true
    },
    floor: {
      type: Number,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    bathroom: {
      type: Number,
      require: true
    },
    size: {
      type: Number,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    houseNo: {
      type: Number,
      require: true
    },
    colony: {
      type: String,
      require: true
    },
    latitude: {
      type: Number,
      require: true
    },
    longitude: {
      type: Number,
      require: true
    },
    images: {
      type: [{
        type: String,
      }],
      require: true
    },
    avaliable: {
      type: Boolean,
      require: true
    },
  },
  {
    timestamps: true
  }
);

const Room = mongoose.models.Room || mongoose.model('Room', schema);
export default Room;