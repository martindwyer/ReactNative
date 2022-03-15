require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(422).send("Email and password both required.");
  }
  User.countDocuments({ email: email }, (err, count) => {
    if (count === 0) {
      const newUser = new User({ email, password });
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
      newUser.save();
      return res.status(200).send({ token });
    } else {
      return res.status(422).send("Email already in use");
    }
  });
});

module.exports = router;
