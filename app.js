const fs = require("fs");

//Reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile("./docs/blog1.txt", "Hello, tester", () => {
//   console.log("file was written");
// });

//If the file does not exist, it will be created
// fs.writeFile("./docs/blog2.txt", "Hello, tester", () => {
//   console.log("file was written");
// });

// directories;
// // Check if the folder exists and create it if it does not
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
