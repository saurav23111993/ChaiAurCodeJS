let username = "saurav@google.com";

if(username){
    console.log("Value is present"); 
}else{
    console.log("Value is present");
}


/// FALSY VALUES

// False, 0, -0, BigInt 0n, null, undefined, NaN, ""

// TRUTHY VALUE
//"0" String, 'false', " ", [], {},function(){}

//Check for Array

const arr = []
if(arr.length !==0){

}

const testObj = {};
if(Object.keys(testObj).length !== 0){

}


// Nullish Coalescing Operation (??) null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 20;

console.log(val1);
