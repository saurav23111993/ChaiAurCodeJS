//For Flow
let array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
   // console.log(element);
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     console.log(`Value of i is ${i}`); 
//     if(i === 5){
//         console.log(`Detected 5`);
//         break;      // Break out of the leave
//     }
// }

for (let i = 1; i <= 20; i++) {
    console.log(`Value of i is ${i}`); 
    if(i === 5){
        console.log(`Detected 5`);
        continue;      // Skip current iteration
    }
}

// while
let i = 1
while (i<5) {
    console.log(i);
    i = i+3;
}
 
const arr = [1,2,3,4,5,"Test"]
for (const num of arr) {
    console.log(num);
}

const greeting = "Welcome Hello Kitty";

for (const greet of greeting) {
    if(greet === " "){
        continue;
    }
    console.log(greet);
      
}

//Maps

const map = new Map();
map.set("Saurav","Tiwari");
map.set("Saurav","Ray");
map.set("Sabarna","Tiwari");

console.log(map.keys());

// for (const [key,value] of map) {
//     console.log(key);
//     console.log(value);
    
// }

for (const key of map.keys()) {
   console.log(map.get(key));
}

const myobj = {
    name : "Saurav",
    age : 31,
    email : "saurav@goh.com"
}

let test = Object.keys(myobj)
console.log(test);


for (const key of test) {
    console.log(key)  
}

////OBJECT

for (const key in myobj) {
        const element = myobj[key];
        console.log(element);  
}
//For In gives index as Key for Array Loop

// For EACH

const coding = ["C","Apex","JS","Swift"];


//Callback Function as Function 
coding.forEach(function (item){
console.log(item);

})

// Callback Function as Arrow Function
coding.forEach( (key)=> {
console.log(key);

})

//Callback Function as Parameter

function someNumber(num){
    console.log(num);
    
}
coding.forEach(someNumber); // Only pass the reference

coding.forEach(
    (item,index,arr)=>{
        console.log(item);
        console.log(index);
        console.log(arr);
        
    }
)


const myCoding = [
    {
    langName : "js",
    langFile : "JavaScript"
    },
    {
    langName : "APex",
    langFile : "LWC"
    },
    {
    langName : "Aura",
    langFile : "SF"
    }
];

myCoding.forEach((item)=>{
    console.log(item);
    for (const key in item) {
            const element = item[key];
            console.log(element);
            
    }
})