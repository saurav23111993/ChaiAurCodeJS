class User {

    constructor(username){
        this.username = username;
    }

    static doLog(){
        console.log("Saurav");
        
        console.log(`${this.username}`);
    }
}

new User("test");


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}