const promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Promise1 is Called');
        resolve();
    },1000);
})

promise1.then(function(){
    console.log("Promise1 Is Resolved.");
})


new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Saurav Is Promisedr");
        resolve();
    },2000)

}).then(function(){
    console.log("Saurav is Resolved");
    
})
.catch(function(){

})
.finally()


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"saurav@gmail.com"})
    },2000)
}).then(function( data){
    console.log(data);
})


const promise4 = new Promise(function(resolve,reject){

    setTimeout(()=>{
            let error = false;
            if(!error){
                resolve("100 Rs Returned")
            }else{
                reject("ERROR: From Database")
            }
    },2000)

})
.then(function(resolve){
    console.log(resolve);
    return "Saurav"
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
        console.log("Promise is Resolved or Rejected");
        
    })



const promise5 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Javascript Is Read", password:"123"})
        }else{
            reject("ERROR: JS Error From Database")
        }
},2000)
})    

async function consumePromise5(){
    try {
        const response =  await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();


//https://api.github.com/users/saurav23111993

// async function callGithubUser(){
//     try {
//       const res = await fetch('https://api.github.com/users/saurav23111993');
//       const data = await res.json()
//       console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// callGithubUser()


fetch('https://api.github.com/users/saurav23111993')
.then((data)=>{
   return data.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})