//MongoDb is a database based on Collections of JS. It has to be downloaded as Community edition and used. Alternatively U can use Atlas, a Cloud Environment for MongoDb installed in Cloud. 
//For local Applications, U must install Mongodb from the website. U should also install Mongosh which is the shell command for working with Mongodb. 
const express = require('express');
const mongoose = require('mongoose');//Module for working with Mongodb database. However, there are other ways also to perform db operations. 
const port = 1234;
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())
///////////////////////////////DB Connection Code//////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/SampleDb?directConnection=true", { useNewUrlParser : true , useUnifiedTopology : true}).then(()=> console.log("Connected to Database"))
.catch(err => console.log(err.message));

const empSchema = new mongoose.Schema({
    id : { type : Number, required : true},
    name : { type : String, required : true},
    address : { type : String, required : true},
    salary : { type : Number, required : true}
});

const employees = mongoose.model('employees', empSchema);
console.log(employees);
///////////////////////////////////REST END POINTS//////////////////////////////////////////////
app.get("/employees", async (req, res)=>{
    const records = await employees.find()
    res.status(200).send(records);
});

app.get("/employees/:id", async(req, res)=>{
    const { id } = req.params;
    const rec = await employees.findOne({id : id});
    if(!rec) res.status(404).send({message : "Employee not found"});
    res.status(200).send(rec); 
})

app.post("/employees", async(req, res)=>{
    const obj = new employees(req.body);
    await obj.save();
    res.status(200).send(obj);
})

app.put("/employees/:id", async(req, res)=>{
    try {
        const emp = await employees.findOneAndUpdate({ id: req.params.id }, req.body);
        res.status(200).send({ message: "Employee updated successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
})


app.delete("/employees/:id", async(req, res)=>{
    try {
        const emp = await employees.findOneAndDelete({id : req.params.id});
        if(!emp) return res.status(404).send({message : "Employee not found to delete"});
        res.status(200).send({message : "Employee deleted successfully"})
    } catch (error) {
        res.status(500).send({message : error.message});      
    }
})

app.listen(port, ()=>{
    console.log("Server is running at " + port);
})

