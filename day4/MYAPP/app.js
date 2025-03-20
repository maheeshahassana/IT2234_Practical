const express = require("express");
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    res.send('hello express js');
});

app.get('/',(req,res)=>{
    res.send('hello it student');
});

app.listen(port,()=>{
    console.log(`Running on:${port}`);
});