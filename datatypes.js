"use strict";  // treat all js code as newer version

// alert()   we are using node js so we can't use alert method , it is available in browser

//code should be readable


//primitive datatypes in js (call by value)
let name = "alice" //string datatype ""  or  ''
let age = 25 //number datatype range of number is 2^53 
let is_logged_in = false //boolean datatype true or false
let children = null //null datatype
let address;    //undefined datatype
                        
 const id=Symbol('123')
 const id1=Symbol('123')
 console.log(id==id1)    //sumbol datatype for unique identifiers
                        //bigint datatype for large numbers


//Non primitive datatypes(call by reference)
//arrays
let books = ["wonder" , "the kite runner", "as good as dead"] 

  //functions
const myfunction= function(){
    console.log("hello")
}

 //object
let myobj = {     
    name="alice",
    age= 19,
}
 
//--------------------------------------------------------------

//stack (primitive datatypes)
//Heap (Nonprimitive types)

