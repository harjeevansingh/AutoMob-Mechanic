// async function timer(){
//     let time = ;
//     setInterval(()=>{
//         time = 
//     }, 600000)

// }


var deadline = new Date().getTime()+600000;
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("minute").innerHTML = minutes; 
// document.getElementById("second").innerHTML =seconds; 
if(document.getElementById('counter').innerText!=null){
    setInterval(clearInterval);
}
document.getElementById('counter').innerText = minutes+'m:'+seconds+'s';
if (t < 0) {
    deadline = new Date().getTime()+600000;
}
}, );

async function booking(serviceName){
    localStorage.setItem('service', serviceName);
    location.assign('booking.html');
}