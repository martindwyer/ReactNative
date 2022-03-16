require("dotenv").config();
require("./models/User");
require("./models/Track");

const requireAuth = require("./middlewares/requireAuth");

const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {});

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to MongoDB", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
