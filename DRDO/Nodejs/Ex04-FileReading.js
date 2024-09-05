//Nodejs has a built in module called as File System that has APIs to perform IO operations on Files. It can be used to create, update and remove files from the directories and also read them. There will 2 sets of functions for each operations: synchronous as well as Asynchronous. 
//All Std modules of Nodejs can be refered using require command with the module name in quotes. Builtin modules dont have ./ reference in the require command. Only local modules will have it.
const cmd = require('prompt-sync')();
const myFs = require("fs");//myFs is the reference of fs that U shall use as object and call its APIs. 
const fileName = "SampleFile.txt"
////////////////File Reading///////////////////
myFs.readFile(fileName, 'utf-8', (err, fileContents)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(fileContents);
    }
});

console.log("This line will execute parallelly");
/////////////////////File Writing/////////////////////////////////
const obj = {};
obj.id = 123; obj.name = "Phaniraj", obj.address ="Bangalore";

//This example takes inputs from the user using prompt-sync module. U should install it before use. 
obj.id = cmd("Enter the Id: ");
obj.name =cmd("Enter the Name: ");
obj.address = cmd("Enter the Address: ");

let data = `${JSON.stringify(obj)}\n`;
myFs.appendFile(fileName, data, "utf-8", (err)=>{
    if(err) console.log(err.message);
})
//todo: Create a program that takes inputs from the user and stores the data in a CSV file. The contents of the CSV file are to be read and converted into array of objects and it should display only one of the properties. 

// myFs.writeFile(fileName, data, 'utf-8', (err)=>{
//     if(err) console.log(err.message);
// })



// const fs1 = require("fs");
// const myOS = require("os");
// const content = fs1.readFileSync("Ex04-FileReading.js");
// console.log(content);
// console.log(myOS.platform())
// console.log(myOS.arch())
// console.log(myOS.cpus().length);
// console.log(myOS.networkInterfaces());
