// async function checkLoggedInHome(){
//     sessionStorage.setItem('username', 'Harjeevan');
//     sessionStorage.setItem('password', 'strong');

//     sessionStorage.setItem('username', 'admin');


//     // sessionStorage.removeItem('username');
//     console.log(sessionStorage.getItem('username'));
//     if(sessionStorage.getItem('username')=="admin"){
//         document.getElementById('name').innerText = 'Hi ' +sessionStorage.getItem('username')+ '|';
//         document.getElementById('reports').removeAttribute('hidden');
//         document.getElementById('logout').removeAttribute('hidden');
//         document.getElementById('login').setAttribute('hidden', true);
//     }
//     else if(sessionStorage.getItem('username')){
//         document.getElementById('name').innerText = 'Hi ' +sessionStorage.getItem('username')+ '|';
//         document.getElementById('services').removeAttribute('hidden');
//         document.getElementById('booking').removeAttribute('hidden');
//         document.getElementById('logout').removeAttribute('hidden');
//         document.getElementById('login').setAttribute('hidden', true);
//     }
// }