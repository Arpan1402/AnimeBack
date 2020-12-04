const monsgoose=require('mongoose');

let animeSchema=new monsgoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        require:true
    },
    desc:{

        genre:{
            type:Array,
            required:true
        },
        releaseDate:{
            type:Date,
            required:false
        },
        plot:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:false
        }

    },

    seasons:{
        type:Object
    }
    
})