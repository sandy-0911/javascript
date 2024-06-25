const account_ID = 144553
let account_Email = "sandeep@gmail.com"
var accountPassword = "12345"
accountCity= "Jaipur"

// account_ID = 2345; // not allowed 
account_Email = 'sahoo@gmail.com'
accountPassword = '54321'
accountCity = "Benguluru"
let accountState


// console.log(account_Email);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var because of issues in block scope and functional scope
*/


console.table([account_Email,account_ID, accountPassword, accountCity, accountState])