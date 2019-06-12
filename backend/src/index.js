require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true });

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333, () => {
  console.log("Listen to por 3333");
});
