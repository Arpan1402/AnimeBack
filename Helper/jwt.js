const jwt=require('jsonwebtoken');
const keys=require('../Config/Keys');

const tokenManager={

    createToken: async(user)=>{

        let token=await jwt.sign(
            {
                user:user.id
            },
            keys.jwtKey,
            {
                expiresIn:"1d"
            }
        );

        return token;
    },

    jwtVerify: async(token)=>{

        let verify=await jwt.verify(token,keys.jwtKey);
        return verify;
    }
}

module.exports=tokenManager;