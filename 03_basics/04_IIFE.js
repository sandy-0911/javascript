(function chai(){//named IFFI
    //console.log(`DB connected`)
})(); //iffi ban gya ab ye : immediately Invoked Function Expression IIFE
//semi colon lagana is zaruri

( () => {
    //console.log(`DB Connected TWO`)
}  )()


( (name) => {
    //unamed IFFI
    console.log(`DB Connected TWO  ${name}`)
}  )("sandy")