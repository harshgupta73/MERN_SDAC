const fs=require("fs")

//read file
fs.readFile("./os.js",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})

//write file
const data="hello harsh here"
// fs.writeFile("./test.txt",data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data written")
//     }
// })

const data1="pqr"
// fs.appendFile("./test.txt",data1,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data appended")
//     }
// })

// fs.unlink("./test.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file deleted")
//     }
// })

// fs.mkdir("../folder",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("folder created")
//     }
// })

fs.rmdir("../folder",(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("folder deleted")
    }
})

