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