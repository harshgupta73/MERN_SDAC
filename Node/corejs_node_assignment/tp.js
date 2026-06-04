const name="harsh"
const age=22
const city="mumbai"

console.log(name)
console.log(age)
console.log(city)


for(let i=1;i<=50;i++){
    console.log(i)
}

let i=1
while(i<=50){
    console.log(i)
    i++
}

const numbers=Array.from({length:50},(_,i)=>i+1);
numbers.forEach(num => {
    console.log(num)
});

const students=["harsh","omkar","sara","rohit"]
console.log(students)
students.push("sagarika")
console.log(students)
students.pop()
console.log(students)

students.forEach(name=>{
    console.log(name)
})

students.splice(1,0,"Sagarika")
console.log(students)

students.splice(2,1)
console.log(students)

const os=require("os")
console.log(os.hostname())
console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())

const fs=require("fs")

const data = "Name:Harsh, Roll no.:45 , Course:CO"
// fs.writeFile('./student.txt',data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data added,file created")
//     }
// })

const data1="Name:Omkar, Roll no.:5 , Course:IT"
// fs.appendFile('./student.txt',data1,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data appended")
//     }
// })

fs.readFile('./student.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})
console.log("hello harsh")