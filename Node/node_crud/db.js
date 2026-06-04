const mongoose=require("mongoose")

const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/crud")
    .then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log("running")
    });
}

module.exports={connectDB}

