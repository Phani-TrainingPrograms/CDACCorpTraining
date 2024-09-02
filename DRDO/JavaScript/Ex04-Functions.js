const items = [];

//Creating a named function, here we have a name to it and shall call it using its name. 
function addRecord(item){
    items.push(item);
}

//Anonymous Function that does not have name, rather assigned to a const which can be used to call the function. New feature from ES 6.0
const removeRecord = function(id){
    debugger;
    let index = items.findIndex(function(e){
        return e.id == id
    });
    
    items.splice(index, 1);
}

//New feature from ES 6 where we can create a function as an expression. Here we have a function that does not take any args, but shall return the items.The => operator is called as ARROW operator or Lambda Operator. While creating Arrow functions, the return keyword is understood and should not be used.  
const getAll = () => items;

const getById = (id) => items.find((e) => e.id == id);

function updateRecord(item){
    const selectedIndex = items.findIndex((e) => e.id == id);
    if (selectedIndex < 0)
        alert("No item found to update");
    else {
        items.splice(selectedIndex, 1, item);
        return;
    }   
}