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
console.log(loginusermessage())


