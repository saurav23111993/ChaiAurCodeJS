const tinderUser = new Object();


tinderUser.id = "123";
tinderUser["name"] = "Saurav";
tinderUser["isLogged"] = true;

console.log(tinderUser);

const regular = {
    email : "saurav@gamil.com",
    fullName : {
        userFullName : {
            firstName : "Saurav",
            lastName : "Tiwari"
        }
    }

}
//console.log(regular.fullName.userFullName.firstName);


const obj1 = {
    1 : "a",
    2 : "b"
};
const obj2 = {
    3 : "c",
    4 : "d",
    5 : {
        name : "Saurav",
        age : 31
    }
};
// console.log({...obj1});
// // const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1, obj2); // Target object is changes hence we should use blank object {}
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);


// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const arr178 = [
    {
        Name : "Saurav",
        Age : 31,
        email : "saurav@google.com"
    },
    {
        Name : "Saurav",
        Age : 31,
        email : "saurav@google.com"
    },
    {
        Name : "Saurav",
        Age : 31,
        email : "saurav@google.com"
    },
    {
        Name : "Saurav",
        Age : 31,
        email : "saurav@google.com"
    }
]

console.log(arr178);
console.log(Object.keys(arr178[0]));
console.log(Object.entries(arr178[0]));
console.log(obj2.hasOwnProperty("3"));

const cours12 = {
    courseName : "JS  Chai Aur Code",
    price : "999",
    courseInstructor : "hitesh",
    courseRelTaker : {
        name : "Saurav",
        age : 31
    }
}
// Object Destructuring
const {courseName : name12, price, courseInstructor,courseRelTaker} = cours12;
console.log(name12, price, courseInstructor,courseRelTaker );

