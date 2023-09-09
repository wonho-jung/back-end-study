// Middleware
// Code which runs(on the server) between the request and the response
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
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

app.use(express.static("public"));

app.use(morgan("dev"));

//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog ",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      console.log("success", result);
      res.send(result);
    })
    .catch((err) => console.log("err", err));
});

// get all blogs
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log("err", err));
});

// get a single blog by id
app.get("/single-blog", (req, res) => {
  Blog.findById("64fa8b6e89b4a685acc072c6")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log("err", err));
});

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
// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404");
// });
