const express = require("express");
const blogController = require("../controllers/blogController");
const routes = express.Router();

//mongoose and mongo sandbox routes

// routes.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog ",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log("err", err));
// });

// get all blogs
routes.get("/blogs", blogController.blog_index);

// get a single blog by id
// routes.get("/single-blog", (req, res) => {
//   Blog.findById("64fa8b6e89b4a685acc072c6")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log("err", err));
// });

// get a single blog details
routes.get("/blogs/:blogId", blog_details.blog_details);
// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404");
// });

//POST
routes.post("/blogs", blog_details.blog_create_post);

//DELETE
routes.delete("/blogs/:id", blog_details.blog_delete);

module.exports = routes;
