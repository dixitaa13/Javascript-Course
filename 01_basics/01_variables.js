const accountId = 144566262772
let accountEmail = "dixita@gmail.com"
var accountPassword = "123678"
accountCity = "Barnala"
let accountState //it will be declared undefined
// accountId = 13  //const don't allow to change


/*
   prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassword = "23363663267832"
accountCity = "Chandigarh"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountState])