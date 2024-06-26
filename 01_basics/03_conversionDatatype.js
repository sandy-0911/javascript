let abc = undefined

//detect its datatype as youre working at backend 

// const {score1}= req.body //no idea what datatype sccore is 


//detecting datatype of score
// console.log(typeof (score))

let valueInNumber = Number(abc)
// console.log(typeof abc)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true =>1; false => 0

let isLoggedIn= 1 
let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//if value of the variable is kept empty then the output comes out as zero

let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)