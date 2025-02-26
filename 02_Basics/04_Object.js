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


const obj3 = {...obj1,...obj2}
console.log(obj3);
