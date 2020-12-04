const mongoose=require('mongoose');
const jwt=require('../Helper/jwt');
const encrypt=require('../Helper/encrypt');
const keys=require('../Config/Keys');
const userModel=require('../Database/Models/user');


const userService={

    signup: async(email,password)=>{
        let response={}

        try{

            let user=await userModel.findOne({email});
            
            if (user){
                return response.msg="User already exist";
            }

            else{

                password = await encrypt.enc(password);

                let newUser=userModel({
                    email,
                    password
                });

                let nUser=await newUser.save();

                if(nUser.id){
                    response.msg="user registered";
                }
            }

            return response;

        }

        catch(err){
            return response.err;
        }
    },

    login: async(email,password)=>{

        let response={};
        try{

            const user=await userModel.findOne(email);
            if(!user){
                response.msg="Wrong email or password";
            }
            else{
                let compare=await encrypt.check(password,user.password);
                if(compare){
                    let token=jwt.createToken(user);
                    return response.msg=token;
                }
                response.msg="Wrong email or password";
            }

        }
        catch(err){
            return response.err;
        }
    }
    

}

module.exports=userService;