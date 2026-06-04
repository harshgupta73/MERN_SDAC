# MERN_SDAC

1. Difference between Node.js and JavaScript?
JavaScript	Node.js
Programming language	Runtime environment
Runs in browser	Runs outside browser
Used for frontend	Used for backend/server-side
Cannot access OS directly	Can access files, OS, network, etc.

Example: JavaScript runs in Chrome, while Node.js runs on your computer using V8 Engine.

2. What is Event Loop?

The Event Loop allows Node.js to perform non-blocking operations.

It continuously checks:

Call Stack
Callback Queue

When the call stack becomes empty, it moves callbacks from the queue to the stack.

Benefit: Node.js can handle multiple requests efficiently using a single thread.

3. What is Callback Hell?

Callback Hell occurs when multiple callbacks are nested inside one another, making code difficult to read and maintain.

getUser(function(user){
    getOrders(user, function(order){
        getPayment(order, function(payment){
            console.log(payment);
        });
    });
});

This pyramid structure is called Callback Hell.

4. Difference between Promise and Async/Await?
Promise	Async/Await
Uses .then() and .catch()	Uses async and await
More complex for many operations	Cleaner and easier to read
Introduced in ES6	Introduced in ES8

Promise

fetchData()
.then(data => console.log(data))
.catch(err => console.log(err));

Async/Await

async function getData(){
    try{
        const data = await fetchData();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
5. What is Middleware in Express?

Middleware is a function that executes between receiving a request and sending a response.

Uses:

Logging
Authentication
Validation
Error Handling
app.use((req,res,next)=>{
    console.log("Middleware Executed");
    next();
});

next() passes control to the next middleware or route.

6. Difference between MongoDB and MySQL?
MongoDB	MySQL
NoSQL Database	Relational Database
Stores JSON-like documents	Stores tables
Flexible schema	Fixed schema
Uses Collections	Uses Tables
Horizontal Scaling	Vertical Scaling
7. What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

Features:

Schema creation
Validation
CRUD operations
Data modeling
const studentSchema = mongoose.Schema({
    name:String,
    age:Number
});
8. What is REST API?

REST (Representational State Transfer) is an architectural style for communication between client and server using HTTP methods.

Methods:

Method	Operation
GET	Read Data
POST	Create Data
PUT	Update Data
DELETE	Delete Data

Example:

GET /students
POST /students
PUT /students/1
DELETE /students/1
9. Difference between require() and import?
require()	import
CommonJS	ES Modules
Used in Node.js	Modern JavaScript
Can be used anywhere	Usually at top
Synchronous	Static loading

require

const fs = require("fs");

import

import fs from "fs";
10. What is package.json?

package.json is the configuration file of a Node.js project.

Contains:

Project name
Version
Dependencies
Scripts

Example:

{
  "name":"myproject",
  "version":"1.0.0",
  "dependencies":{
    "express":"^5.0.0"
  }
}
11. What is npm install?

npm install installs all dependencies listed in package.json.

npm install

Install a package:

npm install express

Install as dev dependency:

npm install -D nodemon
12. What is the purpose of .env?

.env stores sensitive configuration values.

Example:

PORT=3000
DB_URL=mongodb://127.0.0.1:27017/studentdb
SECRET_KEY=mysecret

Access using:

process.env.PORT

Benefits:

Security
Easy configuration management
13. Difference between Authentication and Authorization?
Authentication	Authorization
Verifies identity	Verifies permissions
"Who are you?"	"What can you do?"
Login process	Access control
Uses username/password	Uses roles/permissions

Example:

User logs in with email and password → Authentication
User can access Admin Dashboard → Authorization

Easy way to remember:

Authentication = Verify User
Authorization = Verify Access