// Middleware
// Code which runs(on the server) between the request and the response
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// express app
const app = express();

//MongoDB
const URL = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@nodejs.3ysfane.mongodb.net/node-tuts?retryWrites=true&w=majority`;

// connect to mongodb & listen for requests
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
    // listen for requests
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   // by default, the request is not going to move on to the next middleware
//   next();
// });

// middleware & static files
// So the static files are going to be available to the browser
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
