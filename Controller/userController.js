const express=require('express');
const userService=require('../Services/userService');

const userController={

    registration: async (req,res)=>{

        let email=req.body.email;
        let password=req.body.password;

        if(!email){
            return res.json({"message":"email not found"}).status(500);
        }
        else if(!password){
            return res.json({"message":"password not found"}).status(500);
        }
        else{

            let message=await userService.signup(email,password);
            console.log('Controller'+message);
            return res.json(message);
        }
    },

    login: async (req,res)=>{

        let email=req.body.email;
        let password=req.body.password;

        console.log(email,password)

        if(!email){
            return res.json({"message":"email not found"}).status(500);
        }
        else if(!password){
            return res.json({"message":"password not found"}).status(500);
        }
        else{

            message=await userService.login(email,password);
            console.log('Controller'+message);
            return res.json(message);
        }
    }
}

module.exports=userController;