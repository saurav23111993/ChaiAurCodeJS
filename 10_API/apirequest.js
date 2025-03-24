
const button = document.querySelector('#buttonId').addEventListener('click', function (event) {

    let res ;
    const apireq = new XMLHttpRequest();
    apireq.open('GET', 'https://api.github.com/users/saurav23111993');
    apireq.onreadystatechange = function () {
        console.log(apireq.readyState);
        if (apireq.readyState === 4) {
            res = JSON.parse(this.responseText);
            
            const divId = document.querySelector("#divId");

            const h1fromqu = document.createElement('h2');
            h1fromqu.id = "h1user"   ;
            const innerText = document.createTextNode(`The User Id is ${res.node_id}`) ;
            h1fromqu.appendChild(innerText);
            console.log(h1fromqu);
            divId.appendChild(h1fromqu);

            const h2fromqu = document.createElement('h2');
            h2fromqu.id = "h2user"   ;
            const innerTexth2 = document.createTextNode(`The User Id is ${res.user_view_type}`) ;
            h2fromqu.appendChild(innerTexth2);
            console.log(h2fromqu);
            divId.appendChild(h2fromqu);
        }
    }
    apireq.send();
}, false)



