const user = {
    username : "Sandy",
    price : 99,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

// this is used to refer current context
// user.welcomeMessage()
// user.username = "sam"
//user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this)
//     let username = "sandy"
//     console.log(this.username) //does not work
// }
// chai()
//this doesnt work inside function

//arrow function 
//explicit return 
const chai = () => {
    let name = "sandy"
    console.log(this)
}
chai()

//implicit return ho rha hai
const addTwo = (num1 ,num2 ) => num1 + num2
console.log(addTwo)