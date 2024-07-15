const myNums = [1,2,3,4,5,6,7,8,9,10]
 
const newNums = myNums.map( (num) => { return num +10
})
//console.log(newNums)

//chaining of multiple methods 

const oldNums = myNums
                .map((num) => num*10 )
                .map( (num) => num + 1)
                .filter( (num) => num>=40)

console.log(oldNums)

//cool stuff :accumulator

const array1 = [1,2,3,4]
//0+1+2+3+4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);