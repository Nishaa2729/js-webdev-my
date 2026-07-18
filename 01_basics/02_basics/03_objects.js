// // singleton

// // objects literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLogininDays: ["Monday", "Saturday"]

// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser["location"])

// JsUser.email = "hitesh@chatgpt.com"
// //  Object.freeze(JsUser)
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


//  const tinderUser = new Object()  singleton hai
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "oberoi"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)  // remember this.......

// again we will use spread operator
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

 const course = {
    coursename : "js in hindi",
    price = "999",
    cousreInstructor: "hitesh"
}
// course.cousreInstructor



