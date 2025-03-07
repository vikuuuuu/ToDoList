const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app =express();
app.use(express.json);
app.use(cors);


mongoose.connect("mongodb+srv://220611s049:220611s049@cluster0.5rnnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/register")

app.listen(3001, ()=>{
    console.log("Server Running")
})