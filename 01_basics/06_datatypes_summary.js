// Primitive -> String, Number, Boolean, null, undefined, symbol, bigint

// Reference-type (Non-Primitive) -> Arrays, Objects, Functions

// Javascript is dynamically typed language  because we do not tell about datatype of the variable

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


const bignumber = 238738927829738747924774n
console.log(typeof bignumber);


const heroes = ["batman","spiderman","daga"]   //array

let obj={
    name:"dixita",    //object
    age: 18,
};


const myfunc = function() {
    console.log("Hello World"); 
}

console.log(typeof myfunc);  //-> function
console.log(typeof heroes);   //->object
