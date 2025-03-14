// IIFE -- Immediately Invoked Function Expression
// This is implemented when we want our Function to run immediately for some processing
// This is also required to stop the pollution created by Global scope
// Syntax (Function Defination)(Execute function) ==> ()()

// This is a named IIFE
(function chai(){
    console.log("DB Loaded"); 
})(); // Semi Colon is important as it tells the code to end the code


const var1 = ( (num1, num2)=>{
    console.log(`Name is ${num1}`);
    return num1 + num2;''
    
} )(2,3);

console.log(var1);
