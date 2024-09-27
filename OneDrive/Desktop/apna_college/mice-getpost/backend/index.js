const express=require("express");
const app=express();

app.use(express.urlencoded({extended:true})); // to encode the data 
app.use(express.json());  //to encode the data that is in json format

const port=3000;
app.listen(port,()=>{
    console.log("app listning");
})
app.get("/register",(req,res)=>{
    let {username,password}=req.query;
    res.send(`wellcome ${username}!`);
})
app.post("/register",(req,res)=>{
    const {username,password}=req.body; //using req.use for accessing the quary string.bydefault it returns undefined value.

    res.send(`welcome ${username}!`);
})