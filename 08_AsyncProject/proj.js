

function generateRandomHexCode() {

    let letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[(Math.floor(Math.random() * 16))];
    }
    console.log(color);
    return color;
}

let myVar ;
document.querySelector('#change').addEventListener('click', function (event) {
    console.log("Inside Change");
    if(!myVar){
    myVar = setInterval(function () {
        const randowHexCode = generateRandomHexCode();
        document.querySelector('#h1Id').style.color = randowHexCode;
    }, 1000)
}
})

document.querySelector('#stop').addEventListener('click', function (event) {
    console.log("Inside Stop");
    clearInterval(myVar);
    myVar = null;
})