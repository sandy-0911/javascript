//Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate) //returns object 

//creating anfd updatingnew date
let myCreateDate = new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString())


//new format
// let newMyDate = new Date("2023-10-11")  // yyyy-dd-mm
// console.log(newMyDate.toLocaleString())

//dd-mm-yyyy
let newMyDate = new Date("11-10-2023")  // dd-mm-yyyy
// console.log(newMyDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // gives miliseconds since 1 Jan 1970
// console.log(newMyDate.getTime/())// can generate miliseconds upto the generatedd date 
//useful for comparison


//how to generate seconds 
// console.log(Math.floor(newMyDate/1000))


let myMYdate = new Date()
// console.log(myMYdate.getMonth() + 1)
console.log(myMYdate.getDay())

myMYdate.toLocaleString('default', {
    weekday: "long"
    // timeZone: ""
})




