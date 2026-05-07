//object literals
//singleton  => only one instance of an object can exist

const mySym = Symbol()
const person = {
    name: "alice",
    age: 19,
    city: "islamabad",
    email: "alice@gmail.com",
    hobbies: ["reading", "basketball", "painting"],
    [mySym]: "mySymbolValue"
}

console.log(person["name"])
console.log(person[mySym])

person.name = "bob"
console.log(person["name"])

//freeze function => it prevents modification of an object
//Object.freeze(person)

person.name = "charlie"
console.log(person["name"])

person.greeting = function(){
    console.log(`hello ${this.name}`)
}
console.log(person.greeting())


//Non singleton => multiple instances of an object can exist
 //const olx_user = new Object()

 const olx_user = {}
 olx_user.id = "123",
 olx_user.name = "john"
 olx_user.password = "12345"
 
 console.log(olx_user.name.fullname)

 const olx_user2 ={
    id: "456",

//nested object
    name : {
        fullname: {
            first: "charlie",
            last: "brown",
        }
    },
    password: "67890"

 }
 //print nested object property
 console.log(olx_user2.name.fullname.first)

 //concatation of objects
 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "c", 4: "d"}

 //const obj3 = Object.assign({},obj1, obj2)
 const obj3 = {...obj1, ...obj2}
 console.log(obj3)

 console.log(Object.keys(olx_user))
 console.log(Object.values(olx_user))
 console.log(Object.entries(olx_user))

 console.log(person.hasOwnProperty("hobbies"))

 //objects desctructuring
 const course = {
    course: "Javascript",
    duration: "3 months",
    level: "beginner"
 }
 const {course: CourseName,} = course
 console.log(CourseName)