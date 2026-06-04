const mongoose=require('mongoose')
const { connectDB } = require('./db')

const studentSchema=mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        enum:["Comps","IT","Civil","Mech"],
        required:true
    },
    age:{
        type:Number,
        min:18,
        max:34,
        required:true
    },
    city:{
        type:String,
        enum:["Mumbai","Navi Mumbai"],
        required:true
        
    },
    fees:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }


})

const studentModel=mongoose.model("student",studentSchema)
connectDB()

async function insertStudent(){
    try {
        const result= await studentModel.insertMany([
            {
                id:1,
                name:"harsh",
                email:"harsh@gmail.com",
                course:"Comps",
                age:22,
                city:"Mumbai",
                fees:24000,
                isActive:true
            },
            {
                id:2,
                name:"omkar",
                email:"omkar@gmail.com",
                course:"IT",
                age:24,
                city:"Navi Mumbai",
                fees:26000,
                isActive:false
            }
        ])
    
    console.log(result)
    } catch (error) {
        console.log(error)
    }
}

insertStudent()

async function viewStudents(){
    try {
        const result = await studentModel.find()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
viewStudents()

async function deleteStudent(){
    try {
        const result = await studentModel.deleteMany({age:{$gt:20}})
        console.log(result)
        console.log("deleted")
    } catch (error) {
        console.log(error)
    }
}

//deleteStudent()

async function updateStudent(){
    try {
        const result = await studentModel.updateMany({age:{$gt:20}},{$set:{fees:90000}})
        console.log(result)
        console.log("updated")
    } catch (error) {
        console.log(error)
    }
}
updateStudent()