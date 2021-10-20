const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root1:1password1@cluster0.fdiu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});