const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 1234;

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