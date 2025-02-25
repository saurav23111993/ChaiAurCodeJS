// Object Literal
// Use Symbol
const mysymb = Symbol("id"); // id is the description which is optional
// console.log(mysymb.toString());
const mysymb1 = Symbol("id"); // id is the description which is optional
// console.log(mysymb1);
const jsUser = {
    name : "Saurav",
    "full name" : "Saurav Tiwari",
    [mysymb] : "12345",
    [mysymb1] : "789",
    age : 31,
    location : "Kolkata",
    email :"saurav@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
};
// console.log( jsUser.name);
// console.log( jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysymb]);
// console.log(jsUser[mysymb1]);


jsUser.email = "saurav@google.com";
// console.log(jsUser);
//Object.freeze(jsUser); // Freezes the object for any change
jsUser.name = "Sabarna";
// console.log(jsUser);

// Function

jsUser.greeting = function(){
    console.log("Hello World");
};


jsUser.greetingtwo = function(){
    console.log(`Hello , ${this.name}`);
};


console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
// console.log(jsUser.greeting());