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
            res.writeHead(200,{"Content-type":"text/html"})
            res.end(`
                <html>
                    <body>
                        <h1>Home Page</h1>
                        <p>Welcome to my website</p>
                    </body>
                </html>
            `)
            break
        case "/about":
            res.writeHead(200,{"Content-type":"text/html"})
            res.end(
                `<html>
                    <body>
                        <h1>About Page</h1>
                        <p>Since 1999</p>
                    </body>
                </html>`
            )
            break
        default:
            res.writeHead(404,{"Content-type":"text/html"})
            res.end(`
                <html>
                    <body>
                        <h1>404 Error</h1>
                        <p>Page not found</p>
                    </body>
                </html>
            `)
            break
    }
})
server.listen(4000,()=>{
    console.log("running")
})