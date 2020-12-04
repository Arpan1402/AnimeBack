const mongoose=require('mongoose');
const key=require('../Config/Keys');

const connectDB=async ()=>{
    try{
        await mongoose.connect(key.dbUri,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true 
        })

        console.log("Database Connected");
    }
    catch(err){
        console.log("connection failed");
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;