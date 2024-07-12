(function chai(){//named IFFI
    //console.log(`DB connected`)
})(); //iffi ban gya ab ye : immediately Invoked Function Expression IIFE
//semi colon lagana is zaruri
//to stop the infinte loop of called function 

( () => {
    //console.log(`DB Connected TWO`)
}  )()//arguements pass hote hai isme

//arrow functions are also called expressions
( (name) => {
    //unamed IFFI
    console.log(`DB Connected TWO  ${name}`)
}  )("sandy")