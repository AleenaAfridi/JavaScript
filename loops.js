//for loop
for(let i=0; i<=10; i++){
    if (i === 5){
        console.log(i + " is the mid value")
    }
    console.log(i)
}

for(let i=0; i<=10; i++){
     console.log(`outer loop: ${i}`)
    for(let j =0; j<=10; j++){
        console.log(`inner loop: ${j}`)
    }
}

let array = ['a', 'b', 'c', 'd']
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

//break and continue statements
//break => it is used to exit the loop when a certain condition is met
for(let i=0; i<=10; i++){
    if(i === 5){
        console.log("breaking the loop at 5")
        
        break;}

        console.log(i)
    }
//continue => it is used to skip the current iteration of the loop when a certain condition is met
for(let i=0; i<=10; i++){
    if(i === 5){
        console.log("continuing the loop at 5")
        continue;
    }
    console.log(i)
}

//while loop 
let num = [1, 2, 3, 4, 5]
let arr= 0
while(arr<num.length){
    console.log(num[arr])
    arr++
}

//do while
let score = 1
do{
   console.log(`score: ${score}`)
   score++
}while(score <= 10)

// for of
 let names = ['alice','bob','charlie','daniel']
for (const element of  names) {
     console.log(element)
}

let greeting = "hello world"
 for (const  greet of greeting) {
    if(greet ===" "){
        continue;
        
    }
    console.log(`each word ${greet}`)
 }
    
//map
const map = new Map()
map.set('PAK', 'Pakistan')
map.set('IN' , 'India')
map.set('FR' , 'France')

console.log(map)

for (const  [key,value] of map) {
    console.log(key, ":-", value)
}

const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "pyhton"

}
for (const key in myobject) {
       console.log(key)  //to access the keys
       console.log(myobject[key])   //to access the values
}

//for each loop
//do not return anything
const language= ['a','b','c']
language.forEach(function(lang, index,arr){console.log(lang,index,arr)})

language.forEach((lang)=>{console.log(lang)})

const mynums = [1,2,3,4,5,6,7,8,9]
const values = mynums.filter((nums) => (nums > 4))
console.log(values)

//reduce function 
const even = [2, 4, 6, 8, 10]
const result = even.reduce(function(acc, curr){
    return acc + curr
},0)

console.log(result)