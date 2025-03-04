// const coding = ["C","Python","Java"];


// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values); // For each doesnt retrun anything.


const myNums = [1,2,3,4,5,6,7];
// const returnNums = myNums.filter((item)=>{
//    return item > 4
// })
// console.log(returnNums);

// const newNums = [];
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num);
//     }
// });

// console.log(newNums);

const userBooks = [
    {
        title:"Book 1",
        genre : "Fiction"
    },
    {
        title:"Book 2",
        genre : "Non Fiction"
    },
    {
        title:"Book 3",
        genre : "Science"
    }
];

console.log(userBooks);

const book1 = userBooks.filter((item)=>{
    console.log(item["title"]);
    return item.genre === "Science"
})
 
console.log(book1);

const book2 =  userBooks.filter((item)=>{
    return item.title === "Book 3" || item.title === "Book 1"
})
console.log(book2);


const muNums1 = [1,2,3,4,5,6,7,8,9,10];
const newmyNums2 = muNums1.map((item)=>{

    return item + 10
})

console.log(newmyNums2);

const newNums2 =  muNums1
                    .map((num)=>{return num * 10})
                    .map((num)=>{return num + 1})
                    .filter((num)=>{ return num > 50})
console.log(newNums2);

const myNumReduce = [1,2,3];

const Initial = 3;
const totalSum = myNumReduce.reduce((acc,curVal)=>(

     acc + curVal
     

), Initial)

console.log(totalSum);

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2000
    },
    {
        itemName : "Python Course",
        price : 200
    },
    {
        itemName : "Data Science Course",
        price : 3000
    },
];

const sumShoppingCart = shoppingCart.reduce((acc,item)=>{
   
    return acc + item.price
},0)

console.log(sumShoppingCart);
