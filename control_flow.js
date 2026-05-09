const temperature =41

if(temperature >50){
    console.log("temperature is greater than 50")
}else{
    console.log("temperature is less than 50")
}

const score = 100
if(score >=90){
    power= "fly"
    console.log(`user can ${power}`)
}

const age =15
if(age<18) console.log("underage");

const amount = 1000

if(amount < 500){
    console.log("amount is greater than 500")
}else if(amount < 700){
    console.log("amount is greater than 700")
}else if(amount < 900){
    consolr.log("amount is greater than 900")
}else {
    console.log("amount is 1000")
}


//logical operators
let age1 = 20
let license= true
if(age1 >=18 && license === true){
    console.log("you can drive")
}else {
    console.log("you cannot drive")
}

let B_form = true
let cnic= false
if(B_form === true || cnic === true){
    console.log("allowed")
}

//switch case

let day = "friday"
switch(day){
    case "monday":
        console.log("today id monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
     case "wednesday":
            console.log("today is wednesday")
            break;
    case "thursday":
        console.log("today is thursday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
    default:
        console.log("invalid value")
}

//truthy and falsy values
//falsy values: false, 0, -0, bigint 0n, "", null, undefined, NaN

//truthy values: "0", 'flase'," ",[], {}, function(){}

//to check if array is empty or not
let arr = []
if(arr.length === 0){
    console.log("array is empty")
}

//check if object is empty or not
let obj = {}
if (Object.keys(obj).length ===0){
    console.log("object is empty")
}

//Nullish coalescing operator => ??, it returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
let num = 5 ??10
console.log(num) //output: 5

let num2 = null ?? 10
console.log(num2) //output: 10

let num3 = undefined ?? 15
console.log(num3) //output: 10

//ternary operator
let marks = 85
marks >=87 ? console.log("grade A") : console.log("grade B")
