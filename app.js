const { response } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const Connection=require('./Database/dbConnection');
const userRouter=require('./Routes/userRoutes');

const app=express();

Connection();

app.use(express.json());

app.post('/signup',userRouter);
app.post('/login',userRouter);



const PORT=5000;

app.listen(PORT,()=>{
    console.log("app running");
})