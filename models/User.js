const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const pickSchema = require("./pickSchema");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    min: 6,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   default: "default.img",
  // },

  // isDeleted: {
  //   type: Boolean,
  //   default: false,
  // },

  wins: {
    type: Number,
    default: 0,
  },

  losses: {
    type: Number,
    default: 0,
  },

  winPercentage: {
    type: Number,
    default: 0,
  },

  //   pickHistory: [
  //     {
  //       pickSchema,
  //     },
  //   ],
});

module.exports = User = mongoose.model("user", UserSchema);
