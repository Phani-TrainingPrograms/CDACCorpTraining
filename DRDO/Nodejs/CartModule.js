//Immediately invoked Function Expressions(IIFE)
module.exports = (function(){
    let cart = [];

    function addItem(item){
        cart.push(item)
    }
    function getAll(){
        return cart;
    }
    function totalBill(){
        let amount = 0.0;
        for(const e of cart){
            amount += e.price * e.count;
        }
        return amount;
    }
    return{
        AddNewItem : addItem,
        GetAllItems : getAll,
        GetBill : totalBill
    }
})()