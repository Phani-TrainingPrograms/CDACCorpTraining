//Http Module is the most popular builtin module for developing Web content or web server based application. 
//It has APIs that can be used for executing HTTP services from UR App like GET, POST, PUT, DELETE and PATCH. The APIs help in rendering static pages, REST APIs and more server side scripting code. Now with JS, we can develop server side Apps with NODEJS. 
//With Http module we are able to create web server apps with little or less infrastructure that can be deployed on smaller devices also. Very helpful for IoT devices where the memory will be very small.

const http = require('http');
const portNo = 1234;
//When the server is created, it looks for a callback function that takes 2 args: Request and Response that represents the httpRequest and httpResponse respectively. We use request for handling inputs from the user and response to send results to the user. User interacts with our app using a browser. 
const processRequest = (req, res)=>{
    switch (req.url) {
        case '/favicon.ico' : break;
        case '/Employees' : res.end("<h1>Employees Page</h1>"); break;
        case '/Customers' : res.end("<h1>Customers Page</h1>"); break;
        case '/Payroll' : res.end("<h1>Payroll Page</h1>"); break;
        default:
            res.end("<h1>No Page is found</h1>")
    }
}

http.createServer((req, res) =>{
    processRequest(req, res)
}).listen(portNo);

