const my_date= new Date()
console.log(my_date.toString())
console.log(my_date.toLocaleString())
console.log(typeof my_date)

let created_date= new Date(2006, 4 , 14)
console.log(created_date.toString())

let my_time_stamp = Date.now()
console.log(my_time_stamp)
//console.log(my_time_stamp.getTime())

console.log(my_date.toLocaleString('default', { weekday: 'long' }))
