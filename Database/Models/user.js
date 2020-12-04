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
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        dob:{
            type:Date,
            required:true
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