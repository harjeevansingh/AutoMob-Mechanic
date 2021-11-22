// Add JavaScript Code here
// var response;
// async function getResponse(){
//     response = await fetch("./js/users.json");
// }

// if (response.ok) { // if HTTP-status is 200-299
//     // get the response body 
//     let json = await response.json();
//     console.log(json)
// }
// else {
//     console.log("HTTP-Error: " + response.status);
// }

async function validate(){
    let response = await fetch("../js/users.json");
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body 
        var credentials = await response.json();
        console.log(credentials)
    }
    else {
        console.log("HTTP-Error: " + response.status);
    }
    for(let each of credentials){
        if(each.username==document.getElementById('uname').value) {            
            if (each.password==document.getElementById('pwd').value){            
                alert("Logged in successfully!");
                sessionStorage.setItem('username', each.username);
                sessionStorage.setItem('password', each.password);
                console.log(sessionStorage.getItem('username'));
                location.assign("./home.html");
                break;
            }
            else{
                alert("Invalid credentials!");
                break;
            }
        }
    }
}

async function checkLoggedIn(){
    sessionStorage.setItem('username', 'Harjeevan');
    sessionStorage.setItem('password', 'strong');

    // sessionStorage.setItem('username', 'admin');


    // sessionStorage.removeItem('username');
    console.log(sessionStorage.getItem('username'));
    if(sessionStorage.getItem('username')=="admin"){
        document.getElementById('name').innerText = 'Hi ' +sessionStorage.getItem('username')+ '|';
        document.getElementById('reports').removeAttribute('hidden');
        document.getElementById('logout').removeAttribute('hidden');
        document.getElementById('login').setAttribute('hidden', true);
    }
    else if(sessionStorage.getItem('username')){
        document.getElementById('name').innerText = 'Hi ' +sessionStorage.getItem('username')+ '|';
        document.getElementById('services').removeAttribute('hidden');
        document.getElementById('booking').removeAttribute('hidden');
        document.getElementById('logout').removeAttribute('hidden');
        document.getElementById('login').setAttribute('hidden', true);
    }
}

var logout = async function(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
}