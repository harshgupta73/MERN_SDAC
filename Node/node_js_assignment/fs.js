const fs=require("fs")
const data="Hello, Node.js!"
// fs.writeFile("message.txt",data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data written")
//     }
// })

// fs.readFile("message.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// const data1="update."
// fs.appendFile("message.txt",data1,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data appended")
//     }
// })

fs.readFile("message.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})

fs.unlink("message.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file deleted")
    }
})