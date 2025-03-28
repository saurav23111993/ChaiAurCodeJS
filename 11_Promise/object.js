// function multipleBy5(num){
//     return num*5
// }


// // multipleBy5.test = 2;

// // console.log(multipleBy5(5));

// // console.log(multipleBy5.test);
// // console.log(multipleBy5.prototype);


// function createUser(username,score){
//     this.username = username;
//     this.score = score;

// }

// createUser.prototype.increment = function (){
//     this.score = this.score + 1 ;
// }

// createUser.prototype.printname = function(){
//     console.log(`The Score is ${this.score}`)
// }

// const u1 = new createUser("Saurav","10");
// console.log(u1.printname());




// const name1 = "Saurav            "
// console.log(name1.length)


// Object.prototype.getTrimmedFunc = function(){
//     return this.trim().length
// }

// //const name2 = new String("Saurav")
// console.log(name1.getTrimmedFunc());

// const ob1 = {
//     username: "Saurav",
//     age: 22,
//     work:"IT"
// }

// const ob2 = {
//     username: "Sabarna",
//     age:21,
//     area:"Kolkata",
// }

// console.log(ob1);
// //console.log(ob2.work);
// //ob2.__proto__ = ob1;
// //console.log(ob2.work);

// Object.setPrototypeOf(ob2,ob1)
// console.log(ob2.work);


// let anus1 = "Saurav Tiwari              "

// String.prototype.truelength = function(){

//     console.log(`${this}`);
//     console.log(`${this.trim().length}`);


// }

// anus1.truelength();


// function setUsername(username){
//     this.username = username;
// }

// function createsUser(name1, email){
//     setUsername(name1);
//     this.email = email;
// }

// console.log(new createsUser("Saurav","test@ts.com"))


// class user1234{
//     constructor(username,email,password){
//         this.username = username;
//         this.email= email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     upperUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const saurab1 = new user1234("saurav","saur1@ha.com","usua").encryptPassword();
// console.log(saurab1);



class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`${this.username}`);
    }
}


class Teacher extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`${this.username}`);
    }
}

const chai = new Teacher("Saurav", "email@email.com", "123")
chai.addCourse()
