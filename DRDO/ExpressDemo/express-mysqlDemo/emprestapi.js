//this demo shall connect to mysql database and perform the Curd operations on the Employee table and exposes it as HTTP REST API. 

const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.urlencoded({ extended :true}));
app.use(express.json());

const port = 1234;

////////////////////////////MySQL Connection Statements///////////////////////////////////////
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'SampleDb'
});

db.connect((err)=>{
    err != null ? console.log(err.message) : console.log("Connected Successfully");
});
///////////////////////////SQL Statements////////////////////////////////////////////////////
const getAll = "SELECT * FROM EMPLOYEE";
const getById = "SELECT * FROM EMPLOYEE WHERE ID = ?";
const insert = "insert into employee(name, address,salary, empPic) values(?,?,?,?)"
const update = "update employee set name =?, address = ?, salary = ?, empPic = ? where id = ?";
const deleteSql = "delete from employee where id = ?";
/////////////////////////REST APIs///////////////////////////////////////////////////////////

app.get("/empList", (req, res)=>{
    db.query(getAll, (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        else
           res.json(results);
    })
})

app.get("/empList/:id", (req, res)=>{
    const { id } = req.params;
    db.query(getById, id, (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        else
           res.json(results[0]);
    })  
})


app.post("/empList", (req, res)=>{
    const { name, address, salary, empPic } = req.body;
    db.query(insert, [name, address, salary, empPic], (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        else
           res.json({ id : results.insertId, name, address, salary, empPic});
    })
})

app.put("/empList/:id", (req , res)=>{
    const { id } = req.params;
    const { name, address, salary, empPic } = req.body;
    db.query(update, [name, address, salary, empPic, id], (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        if(results.affectedRows == 1)
           res.json({ "message" : "Employee updated successfully" });
        else
        return res.status(404).json({"message" : "Employee not found to update"});
    })
})


app.delete("/empList/:id", (req, res)=>{
    const { id } = req.params;
    db.query(deleteSql, id , (err, results)=>{
        if(err) return res.status(500).json({ error : err.message});
        if(results.affectedRows == 1)
           res.json({ "message" : "Employee updated successfully" });
        else
            return res.status(404).json({"message" : "Employee not found to update"})
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});