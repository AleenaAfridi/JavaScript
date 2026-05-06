//arrays

let myArr = [ 1, 2, 3, 4, 5, true, "hello"]

console.log(myArr[0])

let myArr2 = new Array (1, 2, 3, 3, 4)

myArr2.push(6)
myArr2.push(7)
console.log(myArr2)

myArr2.pop()
console.log(myArr2)

myArr2.unshift(0)
console.log(myArr2)

myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(1))
console.log(myArr2.indexOf(3))

let stringArr = myArr2.join()
console.log(typeof stringArr)

console.log("A" , myArr2)

let myna1 = myArr2.slice(1,3)
console.log(myna1)

console.log("B", myArr2)
let myna2 = myArr2.splice(1,3)
console.log(myna2)

console.log("C", myArr2)


let students = ["alice", "bob", "charlie", "dave", "eve"]
let marks = [88, 90,87,75, 70]

let result= students.concat(marks)
console.log(result)

//spread operator => concat the arrays
let result1 = [...students,...marks]
console.log(result1)

//flat method => to flatten the nested arrays,flat(infinity) => to flatten all the nested arrays
let subArr= [1,2,3, [4,5,6],7 ,[6,7,[4,5]]]
let flatArr = subArr.flat(2)
console.log(flatArr)

//isArray method => to check if the given value is an array or not
//Array is a global object that is used to create arrays and perform array operations in JavaScript. It provides various methods to manipulate and work with arrays.
console.log(Array.isArray("hello"))

//from method => to create an array from an iterable object.
console.log(Array.from("hello"))

let score1= 100
let score2= 200
let score3= 300
let scores= (Array.of(score1,score2,score3))
console.log(scores)
