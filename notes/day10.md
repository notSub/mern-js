EVENT LISTENERS:
const mybox=document.getElementById("boxlol");

function changeColor(event){
    event.target.style.backgroundColor="tomato";
    event.target.textContent="Ouchh!!";


}
function revert(event){
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent="Click Me!";
}
function hover(event){
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Don't do it!";
}
mybox.addEventListener("click",changeColor);
mybox.addEventListener("mouseover",hover);
mybox.addEventListener("mouseout",revert);

const mybox=document.getElementById("boxlol");
const moveamount=30;
let x=0;
let y=0;

addEventListener("keydown",event=>{
   if(event.key.startsWith("Arrow")){
    event.preventDefault();
    switch(event.key){
        case "ArrowUp"   : y-=moveamount;break;
        case "ArrowDown" : y+=moveamount;break;
        case "ArrowLeft" : x-=moveamount;break;
        case "ArrowRight": x+=moveamount;break;
    }
mybox.style.top=`${y}px`;
mybox.style.left=`${x}px`;
mybox.textContent="😒";
mybox.style.backgroundColor="tomato";
   }
})

addEventListener("keyup",event=>{
    mybox.textContent="😂";
    mybox.style.backgroundColor="skyblue";
})


const hider=document.getElementById("hide");
const naruto=document.getElementById("naruto");
const naruto2=document.createElement("img");
hider.addEventListener("click",event=>{
    if(hider.textContent=="Unhide"){
        hider.textContent="Hide";
        return document.body.append(naruto);

    }
    document.body.removeChild(naruto);
    hider.textContent="Unhide";
})

Small Todo list :
const myButton=document.getElementById("add");
 const myText=document.getElementById("task");
 const myList=document.getElementById("list");

 myButton.addEventListener("click",event=>{
    if(myText.value!=""){
        let tasks=document.createElement("li");
        tasks.textContent=myText.value;
        myList.appendChild(tasks);
        myText.value="";

    }
 })