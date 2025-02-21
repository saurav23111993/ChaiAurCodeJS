// array

const arr1 = [1,2,3,5];
// Index starts from 0
// contains Prototype within Prototype
console.log(arr1);


const aar12 = new Array(15,67,75);
console.log(aar12.length);


// Array Methods
arr1.push(4);// Adds in last
arr1.pop(); // Removes from last

arr1.unshift(100); // Adds in front. Can be time cosuming job if data is large
arr1.shift(); // Removes from front
console.log(arr1.includes(1));
console.log(arr1.indexOf(5));

console.log(arr1);


// Join converts the array in a string where we can specify the separator
console.log(arr1.join("-"));

///Slice and Splice Difference
/// Sliec -- Copy karke, creates a new array with specified range. last number is not included. Original Array remains same
// Splice ---> Cut kakre, creates a new array with specified range. Last Number is included. Original array is changes.


const myNumberArr1 = [1,2,3,5,6,8];
console.log("A", myNumberArr1);
console.log("B", myNumberArr1.slice(0,3));
console.log("C", myNumberArr1);
console.log("D", myNumberArr1.splice(0,3));
console.log("E", myNumberArr1);
