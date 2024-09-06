/*
  Uninstall the npm package mysql ->npm uninstall mysql
  Install the npm package mysql2 -> npm install mysql2
*/

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 1234;

///////////////////Handling HTTP POST BODY////////////////////////////////
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

/////////////////Code is to connect to MySQL DB///////////////
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'SampleDb' 
});

db.connect((err)=>{
    if(err){
        console.error("Not connected: " + err.message);
        return;
    }
    console.log("Connected to db");
});
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////REST ENDPOINTS///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
app.get("/employees", (req, res)=>{
    const query = "SELECT * FROM EMPLOYEE";

    db.query(query, (err, results)=>{
        if(err) 
            return res.status(500).json({error : err.message});
        else
            res.json(results);
    })
})
app.listen(port, ()=>{
    console.log("Server is runnint at " + port);
})

/*
Save the file and run the node command to start the Application: node restapi.js
After the App is successfully launched, Open the browser and type the URL: http://localhost:1234/employees  to see the results.
*/