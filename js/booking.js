function autoFill(){
    // console.log(document.getElementById('selectService')[1]);
    if(localStorage.getItem('service'))
        document.getElementById('selectService').value = localStorage.getItem('service');         
}

function checkDate(){
    let date = new Date(document.getElementById('appointmentDate').value);
    console.log(date);
    let currrent = new Date();
    console.log(currrent);
    if(date<currrent){
        document.getElementById('errorMsg').innerText = "Past dates cannot be selected!";
    }
}