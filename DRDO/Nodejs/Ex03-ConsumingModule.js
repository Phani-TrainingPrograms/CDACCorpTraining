const external = require("./CustomModule");
//console.log(external.simpleFunction());

const cart = require("./CartModule");//cart is the directly the module
console.log(cart);

cart.AddNewItem({"id" : 123, "name" : "Apples", "price" : 200, "count" : 5 });
cart.AddNewItem({"id" : 124, "name" : "Oranges", "price" : 80, "count" : 1 });
cart.AddNewItem({"id" : 125, "name" : "Bananas", "price" : 45, "count" : 1 });
cart.AddNewItem({"id" : 126, "name" : "Tomatoes", "price" : 25, "count" : 2 });
const data = cart.GetAllItems();
const bill = cart.GetBill()
console.log(bill);
//external.mathTable();