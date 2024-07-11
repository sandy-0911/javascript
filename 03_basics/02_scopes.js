
if (true){
    let a = 10
    let b = 20 
    var c = 30
}
//let wala is similar to c++
//var wala ka scope is outside of function too
// var creates dikkat for real 

//nested scopes 
function one(){
    const userName = "sandy"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()

//variables are very powerfull in js 
//they can hold anything 
console.log(functionholder(5))//throws error 
const functionholder = function holder(num1){
    return num1 + 10;
}



another_function(5)//does not throw error 
function another_function(num2){
    return num2;
}
