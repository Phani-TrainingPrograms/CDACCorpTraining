/*
  Uninstall the npm package mysql ->npm uninstall mysql
  Install the npm package mysql2 -> npm install mysql2
*/

const express = require('express');
const mysql = require('mysql2');
//(mysql2) is the preferred method since it supports MySQL 8's newer authentication methods.

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

app.get('/employees/:id', (req, res)=>{
    const {id} = req.params;
    const query = "SELECT * FROM EMPLOYEE WHERE id = ?" + id;
    db.query(query, (err, results)=>{
        if(err)
            return res.status(500).json({error : err.message});
        res.json(results[0]);//returns the first object, not an array. 
    });
});

app.post('/employees', (req, res)=>{
    const { name, address, salary} = req.body;
    const query = "insert into Employee(name, address, salary) values(?, ?, ?)";
    db.query(query, [name, address, salary], (err, results)=>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        res.json({id : results.insertId, name, address, salary });
        //insertedId would be autogenerated id after the successfull insertion in the database. 
    })
})

app.put("/employees/:id", (req, res)=>{
    const { id } = req.params;
    const { name, address, salary} = req.body;
    const query = 'Update Employee set name = ?, address = ?, salary =? where id = ?'
    db.query(query, [name, address, salary, id], (err, results)=>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        if(results.affectedRows == 0){
            return res.status(404).json({"message" : "Employee not found to update"});
        }
        res.json({"message" : "Employee Updated Successfully"})
    })
});

app.delete("/employees/:id", (req, res) =>{
    const { id } = req.params;
    const query = "DELETE From Employee Where id = ?";
    db.query(query, id, (err, results)=>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        if(results.affectedRows == 0){
            return res.status(404).json({"message" : "Employee not found to delete"});
        }
        res.json({"message" : "Employee Deleted Successfully"})
    })
})

app.listen(port, ()=>{
    console.log("Server is runnint at " + port);
})

/*
Save the file and run the node command to start the Application: node restapi.js
After the App is successfully launched, Open the browser and type the URL: http://localhost:1234/employees  to see the results.
*/