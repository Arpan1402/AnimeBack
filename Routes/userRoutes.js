const express=require('express');
const user=express.Router();
const userController=require('../Controller/userController');

user.post('/signup',userController.registration);
user.post('/login',userController.login);

module.exports=user;