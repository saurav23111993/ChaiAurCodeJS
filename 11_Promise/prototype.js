//let myName = "hitesh        ";



let myHeros = ["thor","spiderman"]
let string1 = "Saurav";
let heroPower = {
    thor:"hammer",
    spiderman : "sling",
    getspidermanPower : function(){
        console.log(`${this.spiderman}`);
        
    }
}

Object.prototype.saurav = function(){
    console.log(`Saurav is there`);
    
}

heroPower.saurav();
string1.saurav();
