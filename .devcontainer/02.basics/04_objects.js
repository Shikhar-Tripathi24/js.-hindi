// const tinderUser = new Object()  //singelton object hai
const tinderUser ={} //non singleton object hai //

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "tripathi"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1={1: "a",2:"b"}
const obj2={3: "a" ,4:"b"}
const obj4={5: "a" ,6:"b"}

// const obj3= { obj1,obj2  }
// const obj3 = Object.assign({}, obj1,obj2,obj4)

const obj3 ={...obj1, ...obj2,}
// console.log(obj3);

const user = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUse));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
