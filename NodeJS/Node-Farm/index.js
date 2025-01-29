import fs from "fs";

// const helloWorld = "Hello World!";
// console.log(helloWorld);

//Read file synchronously
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//Write file synchronously
const textOut = `This is what we know about avocado ${textIn}. Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

//Read file asynchronously
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data) => {
    console.log(data);
  });
});
console.log("Will read the file!");
