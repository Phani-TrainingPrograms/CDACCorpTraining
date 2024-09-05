const fs1 = require("fs");
const myOS = require("os");
const content = fs1.readFileSync("Ex04-FileReading.js");
console.log(content);
console.log(myOS.platform())
console.log(myOS.arch())
console.log(myOS.cpus().length);
console.log(myOS.networkInterfaces());