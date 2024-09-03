//Class is a user defined type that is used to represent a collection of data of various types and a set of functions which can be used to manipulate that data of the class. 
//A Class is used in the form of objects, variables of the type(UDT). Technically, we call the variables of the class as OBJECT. Object is an instance of the class. Each instance shall have its own set of data. A Class is more like a blue print where many instances can be created with the same blue print. 
//Objects in JS can be created in multiple ways: 
//Singleton objects. 
//Function based Classes(Prior to ES 6)
//Using class keyword.

// const emp = { empId : 123, empName : "Phaniraj", empAddress : "Bangalore "};//U just created an object. 
// //U can add properties later also
// emp.gender = "Male";
// emp.Salary = 56000;
// //Here the object is an array of key-value pairs where key is the property name and value is the data associated with that property
// for (const key in emp) {
//     const content = `The PropertyName ${key}: The Value : ${emp[key]}`
//     console.log(content);        
// }
// //Dont use For..of for iterating the properties of the object. 
// console.log(emp);
// //This object will be having a single reference irrespective of any no of copies that U create on this object. We use these kinds of objects while we post, put data into a REST API calls. 
// const emp2 = emp;
// emp2.empAddress ="Mysore";
// emp2.workLocation ="Bangalore" //Even if we add a property to the emp2, the emp object will also get the same no of properties as they are same in terms of references. 
// console.log(emp);//Displays the emp details along with WorkLocation. Notice that empAddress is also modified.
///////////////////////Old Syntax of JS Class creation///////////////////////////////
//This is old syntax of JS where class keyword was not present. 
// const employee = function(id, name, address){//like Constructors.  
//     this.empId = id;
//     this.empName = name;
//     this.empAddress = address;
// }

// const empObj = new employee(123, "Phaniraj", "Bangalore");
// const secondObj = new employee(124, "Suresh", "Mysore"); 

// console.log(empObj);
// console.log(secondObj);

////////////////////////////////ES 6 Syntax of class creation////////////////
class Customer{
    constructor(id, name, address, bill){
        this.id = id;
        this.name = name;
        this.address = address;
        this.billAmount = bill
    }

    display = () => `${this.name} is from ${this.address} and has raised the bill for Rs. ${this.billAmount}`    
}

const cst = new Customer(111, "Phaniraj", "Bangalore", 560);
console.log(cst.display());
