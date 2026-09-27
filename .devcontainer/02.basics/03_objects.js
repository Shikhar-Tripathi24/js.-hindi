/// singleton ///
///object.create

const mySym = Symbol("key2")


//object literals
const JsUser = {
    name : "hitesh",
    age : 19,
    "full name": "shikhar tripathi",   ///isko ab . waale tarike se nhi likh sakte hai
    [mySym]: "mykey1",
    location: "jaipur",
    email: "st9358149@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh12345@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS user");
}
    JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());