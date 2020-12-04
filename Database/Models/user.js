const mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    personalInfo:{
        fname:{
            type:String,
        },
        lname:{
            type:String,
        },
        gender:{
            type:String,
        },
        dob:{
            type:Date,
        },
    },
    animeInfo:{
        genre:{
            type:Array,
            required:false
        },
        favs:{
            type:Array,
            required:false
        },
    }
})

module.exports=mongoose.model('userProfile',userSchema);