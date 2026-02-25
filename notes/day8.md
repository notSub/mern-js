settimeout():
let click=document.getElementById("buttons");
click.onclick=setTimeout(hello,5000);



function hello(){
    window.alert("hello after 5 seconds")
}



DigitalClock Program:
function updateTime(){
    const now=new Date();
    let hours=now.getHours()
    let meridiem=hours>=12?"PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    const mins=now.getMinutes();
    const secs=now.getSeconds();
    const finaltime=`${hours}:${mins}:${secs} ${meridiem}`;
    document.getElementById("clockitself").textContent=finaltime;
     

    
}
setInterval(updateTime,1000);

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let result = document.getElementById("stopwatch");

let myid = null;
let starttime = 0;
let elapsed = 0;

start.onclick = function () {
    if (myid !== null) return;   // prevent multiple intervals

    starttime = Date.now() - elapsed;  // allows resume

    myid = setInterval(() => {

    elapsed = Date.now() - starttime;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsed / 1000) % 60);
    let milliseconds = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    result.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}, 10);
};

stop.onclick = function () {
    clearInterval(myid);
    myid = null;
};

reset.onclick = function () {
    clearInterval(myid);
    myid = null;
    elapsed = 0;
    result.textContent = "00:00:00:00";
};let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let result = document.getElementById("stopwatch");

let myid = null;
let starttime = 0;
let elapsed = 0;

start.onclick = function () {
    if (myid !== null) return;   // prevent multiple intervals

    starttime = Date.now() - elapsed;  // allows resume

    myid = setInterval(() => {

    elapsed = Date.now() - starttime;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsed / 1000) % 60);
    let milliseconds = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    result.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}, 10);
};

stop.onclick = function () {
    clearInterval(myid);
    myid = null;
};

reset.onclick = function () {
    clearInterval(myid);
    myid = null;
    elapsed = 0;
    result.textContent = "00:00:00:00";
};