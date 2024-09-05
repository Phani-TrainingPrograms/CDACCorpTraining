//Express is a module provided to create rich and robust Web Applications. Express is used to create various kinds of applications like REST API, Web Apps, MVC Apps and many web centric applications. 
//It provides the alternative for http. 
//Express is one of the most popular external modules that is downloaded in the NPM Repository. 
const express = require('express');
const app = express();
const port = 1234;
const rootdir = __dirname;
/////////////////We need to parse the payload to generate body object/////////////////
app.use(express.urlencoded({extended : true}));

//////////////////////////////////////////////////////////////////////////////////////
//Earlier, if we have to extract the POST body content, we needed body-parser. 
//from Express 4.1, we dont need an body-parser. Instead we have to use a middleware calledd urlEncoded and json to read the body of the Posted data. 
app.get("/", (req, res)=> res.send("<h1>Home Page</h1>"))
app.get("/Employees", (req, res) => res.send("<h2>Employees Page</h2"));
app.get("/Customers", (req, res) => res.send("<h2>Customers Page</h2"));
app.get("/Payroll", (req, res) => res.send("<h2>Payroll Page</h2"));
app.get("/Products", (req, res) => res.send("<h2>Products Page</h2"));
app.get("/Register", (req, res) => res.sendFile(rootdir + "/RegPage.html"));

app.get("/process", (req, res)=>{
    const { txtName, txtEmail, txtLocation} = req.query;//todo: read the query data and display data individually
    res.send(`<h1>Thanks Mr.${txtName} for registering with Us!!!</h1><hr/><p>U shall be contacted later at the registered Email address as ${txtEmail}</p><p>UR work location is at ${txtLocation}</p>`)
});

app.post("/process", (req, res)=>{
    console.log(req.body);
    const { txtName, txtEmail, txtLocation} = req.body;
    res.send(`<h1>Thanks Mr.${txtName} for registering with Us!!!</h1><hr/><p>U shall be contacted later at the registered Email address as ${txtEmail}</p><p>UR work location is at ${txtLocation}</p>`)
})
app.listen(port, ()=>{
    console.log("Server is running at " + port);
})