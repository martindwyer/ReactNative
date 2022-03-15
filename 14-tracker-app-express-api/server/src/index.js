require("dotenv").config();
require("./models/User");

const authRoutes = require("./routes/authRoutes");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {});

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to MongoDB", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
