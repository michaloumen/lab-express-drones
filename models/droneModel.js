const mongoose = require("mongoose");
const { Schema } = mongoose;

const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    propellers: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const droneModel = mongoose.model("drones", droneSchema);
module.exports = droneModel;
