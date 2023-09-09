const express = require("express");

// express app
const app = express();

//register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

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

// // redirects
// app.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });
// // 404 page
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
