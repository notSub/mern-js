temp conversion:

<body >
     
     <h1>Temperature Conversion:</h1>
     <input type="text" id="text"><br><br>
     <input type="radio" name="convert" id="cf">
     <label for="cf">Celsius to Fahrenheit</label><br><br>
     <input type="radio" name="convert" id="fc">
     <label for="fc">Fahrenheit to Celsius</label><br><br>
     <button id="buttons">SUBMIT</button><br>
     <p id="result"></p>
     



    <script src="index.js"></script> 
</body>



const tb=document.getElementById("text");
const cf=document.getElementById("cf");
const fc=document.getElementById("fc");
const result=document.getElementById("result");
let temp;
const button=document.getElementById("buttons").onclick=function(){
     tconversion();

};



function tconversion(){
    if(cf.checked){
        temp=Number(tb.value);
        temp=(temp*9/5)+32;
         result.textContent=temp.toFixed(1)+"F";
    }
    else if(fc.checked){
        temp=Number(tb.value);
        temp=(temp-32)*5/9;
         result.textContent=temp.toFixed(1)+"C";
    }
    else{
         result.textContent="please select a unit";
    
}
}const tb=document.getElementById("text");
const cf=document.getElementById("cf");
const fc=document.getElementById("fc");
const result=document.getElementById("result");
let temp;
const button=document.getElementById("buttons").onclick=function(){
     tconversion();

};



function tconversion(){
    if(cf.checked){
        temp=Number(tb.value);
        temp=(temp*9/5)+32;
         result.textContent=temp.toFixed(1)+"F";
    }
    else if(fc.checked){
        temp=Number(tb.value);
        temp=(temp-32)*5/9;
         result.textContent=temp.toFixed(1)+"C";
    }
    else{
         result.textContent="please select a unit";
    
}
}


// ==========================
// JS Array Practice (Day 3)
// Questions + Outputs
// ==========================


// Q1
let arr1 = [1, 2, 3];
arr1.push(arr1.push(4));
console.log("Q1 Output:", arr1); 
// Output: [1, 2, 3, 4, 4]


// Q2
let arr2 = [10, 20, 30, 40];
let result2 = arr2.map((x, i) => x - i).filter(x => x % 2 === 0);
console.log("Q2 Output:", result2);
// Output: [10, 28]


// Q3
let arr3 = [1, 2, 3, 4];
let sum3 = 0;

arr3.forEach(x => {
  sum3 += x;
  if (x === 3) arr3.push(5);
});

console.log("Q3 Output:", sum3, arr3);
// Output: 10 [1, 2, 3, 4, 5]


// Q4
let arr4 = [3, 1, 4, 1, 5];
let out4 = arr4.reduce((acc, val) => {
  if (val % 2 === 0) acc.unshift(val);
  else acc.push(val);
  return acc;
}, []);

console.log("Q4 Output:", out4);
// Output: [4, 3, 1, 1, 5]


// Q5
let arr5 = ["a", "b", "c"];
let x5 = arr5.join("-");
arr5.reverse().push(x5);

console.log("Q5 Output:", arr5);
// Output: ["c", "b", "a", "a-b-c"]
