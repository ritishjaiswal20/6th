// dom elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;
    //output the time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<spam>:</spam>${addZero(sec)}`;
    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}
// set background and greeting 
function setBgGreet() {
    let today = new Date(),
        hours = today.getHours();
    if (hours < 12) {
        // morining
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good morning';
    }
    else if (hours < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';

    }
    else {
        //evenign 
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}
funxtion getName() {
    if (localStorage.getItem{ 'name' }=== null)
    {

    }
}

showTime();
setBgGreet();