function sayMyName(){
   console.log("H");
   console.log("I");
   console.log("T");
   console.log("E");
   console.log("S");
   console.log("H");
}

// sayMyName()
function addThreeNumbers(number1, number2, number3){
    console.log(number1  + number2 - number3);
}
addThreeNumbers(7, 9, 8)
addThreeNumbers(3, "a" ,"r")

function loginUserMessage(username){
    return `${username} just logged in`
}

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 200000))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 200000))

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is $
        {anyobject.price}`);
}
handleObject(user)
