var accountId = 144553
let accountEmail = "sujal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2  // not allowed

accountEmail= "sujal55@google.com"
accountPassword = "54321"
accountCity = "dehli"


console.log(accountId);

/* Prefer not to use var, 
bacause of issue in block scope and
funtional scope 
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
