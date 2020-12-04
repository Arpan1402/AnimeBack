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
                console.log(password)

                let newUser=userModel({
                    email,
                    password
                });
                console.log(newUser)

                let nUser=await newUser.save();
                console.log(nUser)

                if(nUser.id){
                    response.msg="user registered";
                }
            }
            console.log('service'+response);

            return response;

        }

        catch(err){
            console.log(err)
            return response.err;
        }
    },

    login: async(email,password)=>{

        let response={};
        try{

            const user=await userModel.findOne({email});
            if(!user){
                return response.msg="Wrong email or password";
            }
            else{
                let compare=await encrypt.check(password,user.password);
                if(compare){
                    let token=jwt.createToken(user);
                    console.log(response);
                    return response.msg=token;
                }
                return response.msg="Wrong email or password";
            }

        }
        catch(err){
            console.log(err)
            return response.err;
        }
    }
    

}

module.exports=userService;