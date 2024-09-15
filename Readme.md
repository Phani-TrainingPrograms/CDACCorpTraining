# Angular Training
# JS Programming
- JS is the most popular scripting language for web apps. 
- Js is maintained by an ECMA(European Computer Manufactureres Association). It releases versions every 2 years.
- JS is a Client side scripting language. 
- JS code is created on any text based Editor and executed inside a HTML page. 
- VS Code is used for developing web pages and JS code in real time app development.
- All Js files are saved into the file system with extension .js.
- JS code can be written directly into an HTML page and executed or created as a seperate Js file and consumed into a HTML Document.    

### UI based Functions of JS
1. alert function ->Message Box of the Document that is used to draw the attention of the User and get a message from the Application. This could be typically a Notification message. 
2. confirm function ->Similar to Message Box with Ok and Cancel button that will allow the user to choose on a confirmation message. It returns 0 and 1 based on which U determine the result of the confirmation message. 
3. prompt function ->Typically ask the User a question for which the User answers. The result(RETURN VALUE) of this function is the answer provided by the User. 

### Data Types in JS
1. Js is not a type safe language, it allows to store the data based on its assignment. 
2. Js uses 3 ways to store the variables: const, var and let. var is now obselete.
3. let is used to store variable data and const is used to store const data that is not modifiable directly.
4. let is said to be scope based but var is not. var was the earlier way of declaring variables in JS(Pre ES 6). If there is a possibility of creating 2 variables of the same name using var and each in different scopes, the global scope can be modified in the local scope and is reflected back. However, with let, the local scope and global scoped variables are independent, thanks to scope feature of let.   
5. Use typeof operator to check the data type of the variable. 
6. Js does not differentiate as far as data type is concerned with integers and floating numbers, they are all simply number type. 
7. JS internally identifies the following data types: number, string, bool, object, undefined. 
8. undefined is a variable that is declared but not assigned. It could also be the name that is not available in the current scope. 

### Arrays in JS
1. Arrays are group of data which can be refered as one single unit. Arrays are created using [] operator. 
2. It could be initialized with data. Unlike other languages, arrays in JS work like collection classes where U can insert, delete, update the data within the array without recreating it. 
3. There are multiple ways of iterating the arrays: for loop, for..in loop, for...of loop and array.foreach function.
4. U can add, remove, update array elements. 
5. push function is used to add one or more items to the bottom of the list, unshift function is used to add one or more items to the begining of the List. 
6. splice method is used to delete or update the items into the list. 

### Functions
1. Functions provide a modular approach of building applications.
2. There can be 3 kinds of functions in JS: Named Functions, Anonymous Functions and Lambda Functions(Arrow Functions). 
3. Functions are usually created as Seperate JS files and shall be included in the HTML Document for calling them .
4. Common functions, code that can be consumed by multiple html docs are placed in JS files and included in the respective HTML Documents. If U want to manupulate HTML content of the document dynamically, then that piece of code shall be placed in the HTML Document. (Manupulating DOM Structures). 

### DOM Elements:
1. HTML pages and its contents can be programmatically accessed using DOM.
2. DOM stands for Documet Object Model. 
3. The Html Document is represented by an object called Document. It has functions and event handlers which could be used to handle actions in the form of functions which are invoked when that action occurs while the document is displayed in the browser. 
4. Elements or Tags within the Html Document can be accessed using document object. Its function called GETELEMENTBYID('id') can be used to obtain the reference of the element that we want to access programmatically. 
5. There are other ways to get the elements. QuerySelector, ElementsByTagName, ElementsByClassName are a few of them. 
6. Use innerText and innerHTML for get/set values into the readonly elements like p, div, span etc. 
7. Use value for setting the data inside input elements. 


  
