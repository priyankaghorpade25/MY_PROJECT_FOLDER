//Initialize variables required for funtions
let startTime, updatedTime, difference, tInterval, running = false;
let hours = 0, minutes = 0, seconds = 0;



//get the three button from html file

const startButton=document.getElementById("startBtn");
const stopButton=document.getElementById("stopBtn");
const resetButton=document.getElementById("resetBtn");
const timer=document.getElementById("time");


//function to start the watch

function startWatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1000);// here update timer at every 1 sec
        running = true;
    }
}

//function to stop watch

function stopWatch() {
    clearInterval(tInterval); 
    running = false;
}

//function to resetwatch

function resetWatch() {
   

    clearInterval(tInterval);
    timer.innerHTML = "00:00:00";
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
}
//function to show the continuously changing time;
function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    seconds = Math.floor((difference % (1000 * 60)) / 1000);
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    hours = Math.floor(difference / (1000 * 60 * 60));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
}
//add event listener on startbutton to start stopwatch

startButton.addEventListener("click",startWatch);
stopButton.addEventListener('click',stopWatch);
resetButton.addEventListener('click',resetWatch)