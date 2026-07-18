const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this); // output {} aaa rha hai

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }   ////// undfined iska output aayega

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  // still output is undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))  explicit return 

const addTwo = (num1, num2) =>  num1 + num2 // implicit return

console.log(addTwo(3, 4))  // parethisis me agr nii likhennege toh iss 
                            // tarah likhna hai


const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))
// this is also a way
