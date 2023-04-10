const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
mongoose.connect('mongodb://127.0.0.1:27017/product').then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

const schema=new mongoose.Schema({
    username:String
})
const model=mongoose.model('collection',schema);
app.post("/index",async(req,res)=>{
     const{username}=req.body;
    console.log(username);
    await model.create({username});
    res.send("done");
})
app.get('/',(req,res)=>{
    res.render("index");
})
app.listen(4000,()=>{
    console.log("Server connected");
})