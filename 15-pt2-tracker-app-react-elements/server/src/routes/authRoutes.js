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

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Must provide email address and password" });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(422).send({ error: "Email not found" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email." });
  }
});

module.exports = router;
