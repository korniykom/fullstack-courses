import fs from "fs";
import http from "http";
import url, { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*FILES*/

// const helloWorld = "Hello World!";
// console.log(helloWorld);

// //Read file synchronously
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// //Write file synchronously
// const textOut = `This is what we know about avocado ${textIn}. Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

// //Read file asynchronously
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data) => {
//     console.log(data);
//   });
// });
// console.log("Will read the file!");

/*SERVER*/
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "UTF-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
