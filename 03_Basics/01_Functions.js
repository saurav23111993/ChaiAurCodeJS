function sayMyName(){

    console.log("Saurav Tiwari");
    
}

console.log(sayMyName); //Gives Function reference
sayMyName(); // Execute Function

function addTwoNums (a, b){
    if(typeof a === 'number' &&  typeof b === 'number'){
    return a+b;
    }else {
        return 0;
    }
}
console.log(addTwoNums("9",8))
//Rest Operator
function addAll(a,b, ...num){

    console.log(...num);
    console.log(a);
    console.log(b);
}

addAll(2,3,4,5,6,7,8);


const user = {
    username : "Saurav",
    price : 199
}

function handleObject(userObj){
    console.log(`The username is ${userObj.price}`);
    
}

handleObject({
    username: "Sabarna",
    price : 300
})

const newArray12 = [300,333,555,999];

function returnSecondValue(passArr){
    return passArr[1];
}
console.log(returnSecondValue(newArray12));
