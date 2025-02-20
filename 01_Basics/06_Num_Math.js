const num123 = 12;
console.log(num123);

const num12 = new Number(90);
console.log(num12);

console.log(num12.toString().length);
console.log(num12.toFixed(2));

const otherNum = 23.2997;
console.log(otherNum.toPrecision(4));

const hunderes = 100000000;
console.log(hunderes.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
 
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));


console.log(Math.random()); // Genarates number between 0 < number < 1

console.log(Math.floor((Math.random()*10)+1));


let min = 1
let max = 6
let num1223 = ((Math.random()*(max-min+1))+ min)
console.log(num1223);
console.log(Math.floor(num1223));

let mydate1234 = new Date();
console.log(mydate1234.getMonth());

console.log(mydate1234.toLocaleString('default',{
    month : "long",
    year : "numeric"
}));


