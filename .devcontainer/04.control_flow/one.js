//if

// const isUserloggedIn=  true
// const temperature = 41

// //  if (2 ==="2"){
// //      console.log("execute")

// if (temperature==50){
//     console.log("less than 50");
// }else {
//     console.log("temperature is greater than 50")
// }

// const score = 200

// if (score >100) {
//     var power = "fly"
//     console.log(`user power:${power}`);   //const global scope ke bahar nahi nikalta  par var bahar nikalta hai  chahe try it

// }
//   console.log(`user power:${power}`);


// const balance = 1000

// if (balance >50) console.log("test"),console.log("test2"); //explicit scope maan liya hai ki scope lagaya hai

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance <750) {
//     console.log("less than 750");
// } else if (balance <900) {
//     console.log("less than 900");
// }else if (balance <1000) {
//     console.log("less than ");
// }else {
//     console.log("less than 1200")
// }

const UserloggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggeddInfromEmail = true

if (UserloggedIn && debitcard && 2==3) {
    console.log("Allow to  buy course");
}

if (loggedInfromGoogle || loggeddInfromEmail || guestUser) {
    console.log("user logged in")
}