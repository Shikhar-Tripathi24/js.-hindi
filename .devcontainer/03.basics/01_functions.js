function saymyname(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("r");
}

//saymyname()

// function addtwonumbers(number1,number2) {
//     console.log(number1+number2);
// }

// addtwonumbers(4,5)
// addtwonumbers(4,"5")
// addtwonumbers(4,"a")
// addtwonumbers(4,"null")

function addtwonumbers(number1,number2){

    let result = number1+number2
      return result
}

const result = addtwonumbers(3,5)
// console.log("Result: ", result);


function loginusermessage(username){
    return `${username} just logged in`
}

// console.log(loginusermessage("Shikhar"))
// console.log(loginusermessage(""))




function loginusermessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Shikhar"))
// console.log(loginusermessage())


function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(254))

function calculateCartPrice(...num1){     ///restoperator  ...
    return num1
}

console.log(calculateCartPrice(254,235,8765))


function calculateCartPrice(val1,val2,...num1){     
    return num1
}

// console.log(calculateCartPrice(254,235,8765))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is $
        {anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,300,400]

function returnSecondValue(getArray){
    return getArray[1,2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,300,400]))


