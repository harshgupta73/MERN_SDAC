const mongoose = require("mongoose")
const { connectDB } = require("./db")

const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        min:30000,
        max:70000,
        required:true
    },
    dept:{
        type:String,
        enum:["HR","IT","Comps","Sales","Acc"],
        required:true
    }
})

const empModel=mongoose.model("emp",empSchema)

connectDB()

async function insertEmp(){
    try {
        const data = new empModel({
            name:"harsh",
            salary:40000,
            dept:"Comps"
        })
        const result= await data.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

async function updateEmp(){
    try {
        const result = await empModel.updateOne({name:"harsh"},{salary:50000})
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

async function deleteEmp(){
    try {
        const result= await empModel.deleteOne({name:"harsh"})
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

async function showEmp(){
    try {
        const result = await empModel.find()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// insertEmp()
// updateEmp()
// deleteEmp()
// showEmp()
