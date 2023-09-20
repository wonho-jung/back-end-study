// Middleware
// Code which runs(on the server) between the request and the response
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routers/blogRouters");
// express app
const app = express();

//MongoDB
const URL = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@nodejs.3ysfane.mongodb.net/note-tuts?retryWrites=true&w=majority`;

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

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use(morgan("dev"));

//blog routes
app.use(blogRoutes);
