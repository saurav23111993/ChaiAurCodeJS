const user = {
    username : "Saurav",
    price : 99,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`)
        // console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Sabarna"

// // user.welcomeMessage();
// // console.log(this); // in node its referened to emplty object {} but in Browser this refers to Global Window Object

// function chai(){
//     let test1 = "Saurav"

//     console.log(this.test1)
// }

// chai()


// const codewithChai = function(num1){
//     let test1 = "Saurav"

//     console.log(this)
//     // console.log(this.test1)
// }

// codewithChai(10);

const codewithArrow = (a,b) =>{
    let name = "Saurav";
    console.log(this)
    console.log(this.name)
}

codewithArrow(2,3)

// Arrow Function Implicit Return

// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(7,3))


const addThere = (num1,num2) =>({
    username : "Saurav",
    age : 24
}) 


console.log(addThere(3,2))