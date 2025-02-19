// Primitive Data Type

// string, number, boolean, null, undefined, bigInt, Symbol
let name123 = "Saurav";
let num = 23;
let bool = true;
let nulad = null;
let unde = undefined;
let i = Symbol("1234");
console.log(i);
const bigNumber1 = 2399999999999999999999994n;

console.table([typeof(i),typeof(bigNumber1)]);


const arr = ["a"];
const objname = {
    fname : "Saurav"
};

const functName = function(){
    return "Test";
}

console.log(typeof arr);
console.log( typeof objname);
console.log(typeof functName);

