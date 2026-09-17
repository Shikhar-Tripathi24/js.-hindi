// Primiitive

// 7 types: string,number,boolean,null,symbol,bigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);

const bigNumber  = 34567899876543n
console.log(bigNumber)



// efrence types)non primtive)


// arays , objects ,functions

const herroes = ["shaktiman", "naagraj" , "doga"]
let myObj = {
    name: "shikhar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);
