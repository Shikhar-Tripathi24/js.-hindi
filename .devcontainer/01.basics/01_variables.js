const accountId = 144553
let accountEmail = "st9358149@gmail.com"
var accountPassword = "12345"
accountCity = "kanpur"
let accountState;

// accountedId = 2 // not allowed

accountEmail = "hchc@gmail.com"
accountPassword = "212121"
accountCity = "jaipur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


