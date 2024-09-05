//All Modules are created using a command called module.exports. 
//Nodejs uses the COMMON.JS module structure to expose the modules to the customers. 
module.exports.simpleFunction = function(){
    console.log("A simple function is called");
}

module.exports.mathTable = function(num = 5){
    console.log(`Multiplication Table for ${num}`);
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} X ${index} = ${num * index}`);  
    }
    console.log("--------------End of the Table-----------")
}
/*Use this code in ConsumingModule.js 
const external = require("./CustomModule");
console.log(external.simpleFunction());
*/