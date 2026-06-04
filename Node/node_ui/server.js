const http=require('http')
const fs=require('fs')

const server = http.createServer((req,res)=>{
    let path='../views/'
    switch (req.url) {
        case "/":
            path+='home.html'
            break;
        
        case "/about":
            path+='about.html'
            break;
        
        case "/contact":
            path+='contact.html'
            break;
    
        default:
            path+='error.html'
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.end(data)
        }
    })
})



server.listen(4000,()=>{
    console.log("server running")
})

