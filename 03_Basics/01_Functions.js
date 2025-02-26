function sayMyName(){

    console.log("Saurav Tiwari");
    
}

console.log(sayMyName); //Gives Function reference
sayMyName(); // Execute Function

function addTwoNums (a, b){
    if(typeof a === 'number' &&  typeof b === 'number'){
    return a+b;
    }
}
console.log(addTwoNums(9,8))