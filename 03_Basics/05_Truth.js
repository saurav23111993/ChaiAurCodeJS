// let username = "saurav@google.com";

// if(username){
//     console.log("Value is present"); 
// }else{
//     console.log("Value is present");
// }


// /// FALSY VALUES

// // False, 0, -0, BigInt 0n, null, undefined, NaN, ""

// // TRUTHY VALUE
// //"0" String, 'false', " ", [], {},function(){}

// //Check for Array

// const arr = []
// if(arr.length !==0){

// }

// const testObj = {};
// if(Object.keys(testObj).length !== 0){

// }


// Nullish Coalescing Operation (??) null undefined
// Can be used to set default values

let val1 =2;
// val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? undefined ?? 20;

console.log(val1);

let var1 = 9;
 var1 = var1 ?? 100;
console.log(var1);

// Ternary Operator
var1 = var1 > 10 ? var1 : 0
console.log(var1);