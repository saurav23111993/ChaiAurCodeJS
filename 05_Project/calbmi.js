const clock = document.querySelector('#clock');

setInterval(()=>{
    let datetime1 = new Date();
    clock.innerHTML = datetime1;

},1000)