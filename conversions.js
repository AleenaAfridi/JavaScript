let score= "33"

console.log (typeof score)
console.log(typeof (score))

let value_in_number = Number (score)
console.log(typeof value_in_number)

let string=undefined
let key = Number (string)
console.log(typeof key)
console.log(key)   //NaN not a number

//string cannot convert to number so it'll give NaN
//null give 0
//undefined give NaN
//true=1 , false=0

let log_in = 1
let bool_login = Boolean(log_in)
console.log(typeof bool_login)

//1=true
//0=false
//""=false
//"some string"=true

let digit=30
let string_digit= String(digit)
console.log(typeof string_digit)

//************************OPERATIONS************************//

let value= 3
let negvalue= -value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)


