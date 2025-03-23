const insert = document.querySelector('#insert');

window.addEventListener('keypress',(event)=>{
    console.log(event.key)
    insert.innerHTML = `<h1>${event.key} </h1>`

})