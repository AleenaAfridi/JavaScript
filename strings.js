let name = "alice"
let last_name = "gilbert"
let age = 19
console.log(name+ " "+ last_name)

//better way
console.log(` Hello my name is ${name} and my age is ${age}`)

let gamename= new String ("SonicDash")        //creates a new String object with the value "Taken".
console.log(gamename)                     
console.log(gamename[0])                 //returns the character at the specified index in a string. 
console.log(gamename.__proto__)         //returns the prototype of the String object, which contains methods and properties that can be used with string instances.
console.log(gamename.length)           //returns the length of a string.
console.log(gamename.toUpperCase())   //returns the string converted to uppercase letters.
console.log(gamename.charAt(2))      //returns the character at the specified index in a string.
console.log(gamename.indexOf('k'))  //returns the index of the first occurrence of the specified value, or -1 if it is not found.
console.log(gamename.slice(0,3))   //returns a portion of a string based on the specified start and end indices. The start index is inclusive, while the end index is exclusive.
console.log(gamename.split('a'))   //returns an array of strings split by the specified separator. In this case, it splits the string "Taken" into an array of two elements: ["T", "ken"].

console.log(gamename.slice(-4,-1))  

const url = 'https://www.example.com%20path%20to%20resource';
console.log(url.replace('%20','-'))
console.log(url.includes('example'))  //returns true if the specified string is found within the original string, otherwise returns false.