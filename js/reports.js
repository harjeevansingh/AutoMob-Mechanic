async function checkLoggedInReports(){
    //     sessionStorage.setItem('username', 'Harjeevan');
    //     sessionStorage.setItem('password', 'strong');

    //     sessionStorage.setItem('username', 'admin');
    if(sessionStorage.getItem('username')!='admin'){
        location.assign('./home.html');
    }
    else{
        document.getElementById('name').innerText = 'Hi ' +sessionStorage.getItem('username')+ '|';
        document.getElementById('reports').removeAttribute('hidden');
        document.getElementById('logout').removeAttribute('hidden');
    }
}
