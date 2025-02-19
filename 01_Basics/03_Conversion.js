let name1;

//console.log(typeof name1);


let name2 = Number(name1);
//console.log(name2);

//console.log(typeof name2);

// "33" --> Number
// "33adsad" ---> NaN Not a Number
// null ---> 0
//undefined --> Nan
// true/False --> 1/0

let isLoggedIn = "Saurav";

let booleanIsLoggedIn =  Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 --> true
//0 --> False
// null --> False
// undefined --> False
// "" --> False
//"Saurav"  --> True


let someNumber = true

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));


/*******************************Operation ***********************/

let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);


let x = 3;
const y = x++;

console.log("Value of x ", x,"Value of y ", y);

// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log("Value of a ", a,"Value of b ", b);

// Expected output: "a:4, b:4"