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
            res.end(
                `<!doctype html>
                <html lang="en" data-bs-theme="light">
                    <head>
                        <title>Title</title>
                        <!-- Required meta tags -->
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                        <!-- Bootstrap CSS v5.3.8 -->
                        <link
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
                            rel="stylesheet"
                            integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
                            crossorigin="anonymous"
                        />
                    </head>
                
                    <body>
                        <header>
                            <!-- place navbar here -->
                        </header>
                        <main>
                            <div class="mb-3">
                                <label for="" class="form-label">Home</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                />
                                <small id="helpId" class="form-text text-body-secondary"
                                    >Help text</small
                                >
                            </div>
                            
                        </main>
                        <footer>
                            <!-- place footer here -->
                        </footer>
                        <!-- Bootstrap JavaScript Bundle (includes Popper) -->
                        <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
                            crossorigin="anonymous"
                        ></script>
                    </body>
                </html>`
                
            )
            break
        case "/about":
            res.writeHead(200,{"Content-type":"text/html"})
            res.end(
                `<!doctype html>
                <html lang="en" data-bs-theme="light">
                    <head>
                        <title>Title</title>
                        <!-- Required meta tags -->
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                        <!-- Bootstrap CSS v5.3.8 -->
                        <link
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
                            rel="stylesheet"
                            integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
                            crossorigin="anonymous"
                        />
                    </head>
                
                    <body>
                        <header>
                            <!-- place navbar here -->
                        </header>
                        <main>
                            <div class="mb-3">
                                <label for="" class="form-label">About</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                />
                                <small id="helpId" class="form-text text-body-secondary"
                                    >Help text</small
                                >
                            </div>
                            
                        </main>
                        <footer>
                            <!-- place footer here -->
                        </footer>
                        <!-- Bootstrap JavaScript Bundle (includes Popper) -->
                        <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
                            crossorigin="anonymous"
                        ></script>
                    </body>
                </html>`
                
                
            )
            break
        default:
            res.writeHead(404,{"Content-type":"text/html"})
            res.end(
                `<!doctype html>
                <html lang="en" data-bs-theme="light">
                    <head>
                        <title>Title</title>
                        <!-- Required meta tags -->
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                        <!-- Bootstrap CSS v5.3.8 -->
                        <link
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
                            rel="stylesheet"
                            integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
                            crossorigin="anonymous"
                        />
                    </head>
                
                    <body>
                        <header>
                            <!-- place navbar here -->
                        </header>
                        <main>
                            <div
                                class="alert alert-primary alert-dismissible fade show"
                                role="alert"
                            >
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            
                                <strong>Hello User!</strong> Module not found
                            </div>
                            
                        </main>
                        <footer>
                            <!-- place footer here -->
                        </footer>
                        <!-- Bootstrap JavaScript Bundle (includes Popper) -->
                        <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
                            crossorigin="anonymous"
                        ></script>
                    </body>
                </html>`
                
                
            )
            break
    }
})
server.listen(4000,()=>{
    console.log("running")
})