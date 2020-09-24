const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required,
    },
    nombre: {
      type: String,
      required,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
