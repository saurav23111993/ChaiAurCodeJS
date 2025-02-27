// let a = 10;
// const b = 20;
// var c = 30; 
// console.log(a);
// console.log(b);
// console.log(c);


//{ } --> Scopes (If Else Function)

if(true){
    let a = 10;
    const b = 20;
    var c = 30; 
    d = 50;
}

//console.log(a);
//console.log(b);
c = 300
console.log(c);
console.log(d);

// Block Scope and Global Scope


//Nested

function one(){
    const username = "Saurav"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
}

one();


if (true){
    const username = "Sabarna"
    
    if(username === "Sabarna"){
        const website = "Facebook";
        console.log(username + website);
        
    }
    // console.log(website);
    

}
// console.log(username);

function secondaryFunction(num){

    return num +1;
}

secondaryFunction(5)

/// This is a Function Expression
// tertiarysum(6); /// Not possible as the function is called before declaration
const tertiarysum = function(num){
    return num + 5;
}


/// Arrow Function






