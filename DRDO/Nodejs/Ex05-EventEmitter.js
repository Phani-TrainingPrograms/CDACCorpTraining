//Events are actions performed by the user on the object. Click, MouseMove are some of the events of the UI. Likewise, UR classes can also have events that could be triggered if an action/function is called. Events internally behave like Callback functions only. 

//Events are triggered based on the required logic of the programmer. As a Programmer, one should define the moment on the event occurring and as a Consumer , one should define/register a handler which is a function that is invoked when the event has occured. 
const myEvents = require("events");

const btn = new myEvents();
//on is the method to register the event. 
btn.on("myClick", ()=>{
    console.log("My Button was clicked");
})

//Raise this event. 
btn.emit("myClick");//Emit is a method that is used to raise an event. 
//We use EventEmitters in Angular to raise events from the inner component to the outer component. 

//If U want UR components to have events, U should import the events module, create an instance of it and use on to register the event and emit to trigger the event. 
