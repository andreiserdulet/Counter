const YEARS = document.getElementById('years');
const DAYS = document.getElementById('days');
const HOURS = document.getElementById('hours');
const MINUTES = document.getElementById('minutes');
const SECONDS = document.getElementById('seconds');
const selectDate = prompt("Introdu data (ex: 10 Aug 2021): ", " ");
//moments JS
// const selectDate = "10 Aug 2021";
function counter(){
    const selectMyDate = new Date(selectDate);
    const currentDate = new Date();
    const secondsLeft = (selectMyDate - currentDate) / 1000;
    const year = Math.floor((secondsLeft / 3600 / 24) / 365);
    const day = Math.floor((secondsLeft / 3600 / 24) % 365) ;
    const hour = Math.floor(secondsLeft / 3600) % 24;
    const minute = Math.floor(secondsLeft / 60 ) % 60;
    const second = Math.floor(secondsLeft % 60);
    console.log(day, hour, minute, second);
    if(currentDate === selectMyDate){
        alert('!!!')
    }
    else{
        YEARS.innerHTML = formatTime(year) + "Y";
        DAYS.innerHTML = formatTime(day) + " D";
        HOURS.innerHTML = formatTime(hour) + " H";
        MINUTES.innerHTML = formatTime(minute) + " M";
        SECONDS.innerHTML = formatTime(second) + " S";
    }

}
let formatTime = (time) =>{
    return time < 10 ? "0" + time : time;
}
const newDate = new Date(0);
console.log(newDate);
counter();
setInterval(counter, 1000);