const marvel_heroes = ["thor", "ironman", "spiderman"]

const dc_heroes = ["superman", "flash", "batman" ]


// marvel_heroes.push(dc_heroes)
// //***************//
// console.log(marvel_heroes)// 4th element as an array ayya

//use concat instead 
// const newarr= marvel_heroes.concat(dc_heroes)
// console.log(newarr)

//spreading method
const new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(new_heroes)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//how to handle this 
const real = another.flat(Infinity)
// console.log(real)

// console.log(Array.isArray("sandeep"))
// console.log(Array.from("sandeep"))

console.log(Array.from({name : "Sandeep"})) // interesting 
//specify karo kisse banani hai keys se ya values se 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))





