const counter=document.getElementById("count")
const increaseBtn=document.getElementById("increase-btn");
const decreaseBtn=document.getElementById("decrease-btn");
const resetBtn=document.getElementById("reset-btn")

counter.style.fontSize= "4rem";
counter.style.color="white";


let startTime, updatedTime, difference, tInterval, running = false;
let hours = 0, minutes = 0, seconds = 0;

function increaseCount(){
    let time = parseInt(counter.innerHTML, 10);
    time+=1;
    counter.textContent=`${time}`
    console.log(time);

}
function decreaseCount(){
    let time = parseInt(counter.innerHTML, 10);
    time-=1;
    counter.textContent=`${time}`
    console.log(time);

}
function reset(){
    let time = parseInt(counter.innerHTML, 10);
    time=0;
    counter.textContent=`${time}`
    console.log(time);

}

increaseBtn.addEventListener('click',increaseCount);
decreaseBtn.addEventListener('click',decreaseCount);
resetBtn.addEventListener('click',reset);


