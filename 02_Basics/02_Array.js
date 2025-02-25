let marvel_heros = ["Thor","Iron Man", "Hulk", "SpiderMan", "Black Widow"];
const dc_heros = ["Superman", "Flash","Batman"];
//console.log(marvel_heros);
//marvel_heros.push(dc_heros); //Pushes the whole array to last position
// console.log(marvel_heros);
// console.log(dc_heros);

// marvel_heros.push(...dc_heros); //Use Spread operator
// console.log(marvel_heros);

marvel_heros.concat(dc_heros);
console.log(marvel_heros.concat(dc_heros)); // Concat creates a new array with all members from other two array


let arr124 = [...marvel_heros, ...dc_heros] // Spread Operator


const another_array = [1,2,3,[4,5,6],[7,8,[9,10]]];

const usable_another_array = another_array.flat(Infinity);
console.log(usable_another_array);

console.log(Array.isArray(usable_another_array)); // Checks if the passed parameter is array or not
console.log(Array.from("Saurav"));
console.log(Array.from({
    name : "Saurav"
})); // return empty array as its not specified from which field to create the array

console.log(Array.of(100,900, 988));
