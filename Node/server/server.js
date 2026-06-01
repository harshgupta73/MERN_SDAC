const http=require("http")
const server=http.createServer((req,res)=>{
    // if(req.url==="/"){
    //     res.end("home...")
    // }
    // else if(req.url==="/about"){
    //     res.end("about...")
    // }
    // else{
    //     res.end("Module not found")
    // }

    switch(req.url){
        case "/":
            res.end("home...")
            break
        case "/about":
            res.end("about...")
            break
        default:
            res.end("Error")
            break
    }
})
server.listen(4000,()=>{
    console.log("running")
})