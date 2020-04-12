const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const User = require("../../models/User");

router.post("/updatewins", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      user.wins += 1;
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

router.post("/updatelosses", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      user.losses += 1;
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

router.post("/updatewinpercentage", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      const totalLoss = user.losses;
      const totalWin = user.wins;
      const totalPicks = totalLoss + totalWin;
      user.winPercentage = Math.floor((totalWin / totalPicks) * 100);
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

module.exports = router;
