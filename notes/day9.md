Asynchrnoous vs synchrnous code
function greet(callback){
    
    setTimeout(()=>{console.log("hello buddy");
    callback()},3000);

}


function sub(){
    console.log("hello 3");
    console.log("hello 4");
    console.log("hello 5");

}

greet(sub);


error handling:
try{
    const lol=function(){console.log("hello")};
    lol();
}

catch(error){
  console.error(error);
}
finally{
    console.log("this always executes bro");
}

console.log("end of the project");



try{
const dividend= window.prompt("enter teh dividend");
const divisor= window.prompt("enter the divisor");  
if(divisor==0||typeof(divisor)!=typeof(7)){
    throw new Error("You cant divide by 0 and u cnat add a string as divisor");
}  
const division= dividend/divisor;
console.log("the result is ",division); 
}
catch(error){
    console.error(error);

}
console.log("lol")


Calculator:
const result=document.getElementById("result");
function appendToDisplay(input){
     
        result.value+=input;

    }
   

function calculate(){
    try{
        // if(isNaN(Number(result.value[0]))){
        //     throw new Error("You cant start with a symbol first");
        // }
    
      result.value=eval(result.value);
    }
    catch(error){
        result.value="Err";
    }

}
function clearDisplay(){
    result.value="";
}