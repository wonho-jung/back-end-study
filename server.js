const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  //lodash
  const num = _.random(0, 20);
  // function call only once
  const once = _.once(() => {
    console.log("call once");
  });
  once();
  //Second time call doesn't work
  once();

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("sorry, we can't find the file");
    } else {
      res.end(data);
    }
  });

  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end("sorry, we can't find the file");
  //   } else {
  //     //   res.write(data);
  //     //   res.write("<p>hello, element</p>");

  //     res.end(data);
  //   }
  // });
});

server.listen(3000, () => {
  console.log("Server is running...");
});
