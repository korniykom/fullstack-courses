import fs from "fs";
import http from "http";
import url, { fileURLToPath } from "url";
import path from "path";
import replaceTemplate from "./modules/replaceTemplate.js";
import slugify from "slugify";

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
const tempOverview = fs
  .readFileSync(`${__dirname}/templates/template-overview.html`)
  .toString();
const tempCard = fs
  .readFileSync(`${__dirname}/templates/template-card.html`)
  .toString();
const tempProduct = fs
  .readFileSync(`${__dirname}/templates/template-product.html`)
  .toString();
const data = fs
  .readFileSync(`${__dirname}/dev-data/data.json`, "UTF-8")
  .toString();
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj
      .map((el) => {
        return replaceTemplate(tempCard, el);
      })
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
    //Product pag
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    //API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    //Not found
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
