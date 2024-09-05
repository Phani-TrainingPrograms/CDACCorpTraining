//Async Programming is a feature of executing multiple functions parallelly instead of one after the other. This is required in calling functions that takes more time to return which could be making external calls to other servers using HTTP. 
//REST APIs are functions that are available thru URLs and accessible using HTTP. Typically, REST API URLS return data, not the actual page. With this data, the developer can create HTML Docs and use JS APIs to fill the data into the HTML page. There will be clean seperation from the Data and the UI. 

function test1(){
    let start = Date.now();
    while(Date.now() - start < 5000){
        //do nothing
    }
    return "Hello Sync Program"
};

console.log("Starting the App.....");
//let res = test1();
//console.log(res);
console.log("....Finishing the App");

//In this example, the Finishing line will come after 5 seconds, after test1 returns. This is called Synchronous Function. 
//We need async programming for using callback functions, making calls to REST APIs using fetch or any other REST API Calling functions and file read/write operations that we do in server side scripting. 
//JS supports Async Programming using Callbacks, Promises and Async/Await statements. 

//////////////CallBacks in JS///////////////////////////
// function greet(name){
//     console.log(`Hi ${name}, How are U?`);
// }

// function displayGreeting(anotherFunc){
//     const name = prompt("Enter the Name");
//     anotherFunc(name);
// }

// displayGreeting(greet);
//Callbacks are difficult to maintain if there is a nested callbacks in UR Code. When U perform multiple async tasks, then the maintaintability of the code becomes an issue. This is called as CallBack Hell. 
/////////////////////////Example of CallBack Hell/////////////////////////////////
// function greet(callBackFn) {
//     setTimeout(function(){
//         console.log("Hi Phani");
//         callBackFn();
//     }, 2000)//This function shall wait till 2 seconds. But will not stop the browser to execute the next line of statement.
//     console.log("This statement executes without waiting for hi phani");
// };
// greet(function(){
//     console.log("Hi Suresh");
// });
// console.log("Testing asnyn Code");
//////////////////////Example of setTimeout Function//////////////////////////
// console.log("Start of the script");
// setTimeout(() => {
//    console.log("I shall be printed after 5 seconds"); 
// }, 5000);
// console.log("End of script");

function DelayedFunction(callBackFunc){
    setTimeout(callBackFunc, 5000);
}
console.log("This statement will be executed without waiting for Delayed Function to complete");

DelayedFunction(function(){
    console.log("This function will execute after 5 seconds")
})

