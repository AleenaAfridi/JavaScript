function Name(){
    console.log("charlie brown");
}

Name()

function Sum(num1, num2){
    console.log(num1 +num2)
}

Sum(3,4)

function Subtract(num1, num2){

    let result = num1 - num2
    return result
}

let subtraction = Subtract (10 , 5)
console.log("Subtraction: " ,subtraction)

function loginMessage(username){
    if(username === undefined){
       console.log("please provide a username")
       return 
    }
    return `${username} has logged in`
}
let message =loginMessage()
console.log(message)


//rest operator => allows us to pass an indefinite number of arguments as an array
function Total(...amount){
    return amount
}

let totalAmount = Total(10, 20, 30, 40)
console.log(totalAmount)

//object function
let person = {
    name:"emily",
    age: 25
}
function handle_obj(user){
    console.log(`my name is ${user.name} and my age is ${user.age}`)
}

(handle_obj(person))

let arr = [1,2,3,4,5]

function my_array(arr){
    return arr[1]
}
console.log(my_array(arr))

//this and arrow functions
const add = (num1,num2)=> num1+num2
 const sub = (num1,num2)=> (num1-num2)
 const div = (num1,num2)=>{return num1/num2}
 (num1,num2)=>num1*num2


//immediatly invoked function expression (IIFE)

//it is use to avoid polluting the global scope and to execute a function immediately after it is defined
;(function message(){
    console.log(`welcome`);
})();

((name)=>{
    console.log(`welcome ${name}`)
})("frank")