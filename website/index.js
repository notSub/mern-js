// console.log(`hello`);
// console.log(`I like pizza`);

// window.alert('this is an alert');
// window.alert('i like pizza!');
// document.getElementById("myh1").textContent ='hello';
// document.getElementById('myp').textContent= 'this is a cool way to display content in the website without using html tags';

// variable = A container that stores a value.
// Behaves as if it were the value it contains.

//  1. declaration   let x;
//  2. assignment    x = 100;

// let x;
// x=100;
// let age=26;
// let price=10.99;
// let gpa=8.5;
// let firstName= "Sub";
// console.log(typeof firstName);
// console.log(`You are ${age} years old and your gpa is ${gpa} `);
// console.log('the price is',firstName);
// let online= true;
// console.log(`Sub is online: ${online}`);

// let fullName= `Sub Anna`;
// let age=26;
// let isStudent=false;
// document.getElementById("myp1").textContent=`My name is ${fullName}`;
// document.getElementById("myp2").textContent=age;
// document.getElementById("myp3").textContent=`Am i a student? ${isStudent}`;
// arithmetic operators = operands (values, variables, etc.)
// operators (+ - * /)
// ex. 11 = x + 5;
// let students=35;
// window.alert(`the class size is ${students}`);
// students--;
// weight=345;
// if (students==36) {
//     console.log(`hello dog`);
    
// }
// else{
//     console.log(weight);
// }
// console.log(students);
// let students = 35;
// students+= 5;
// console.log(students);
// operator precedence
// 1. parenthesis ()
// 2. exponents
// 3. multiplication & division & modulo
// 4. addition & subtraction

// let result = 12 % 5| + 8 / 2;

// console.log(result);


// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username= window.prompt(`enter your name:`);
// console.log(username);
// let username;
// document.getElementById("mybutton").onclick= function(){
//     username= document.getElementById("mytext").value;
//     console.log(`your name is ${username}`);
//     document.getElementById("myh1").textContent= `hello ${username}`;

//     }



// type conversion = change the datatype of a value to another
//(strings, numbers, booleans)
// let age= window.prompt("how old are you?");
// age=Number(age);
// age+=1;
// console.log(`You are ${age}`);
// console.log(typeof age);


// const= a variable that can't be changed once a value is assigned

// const pi=3.14;
// let radius;
// let circumference;
// radius =window.prompt(`enter the radius in number`);
// radius = Number(radius);
// circumference= 2*pi*radius;
// console.log(`the circumference of the circle is ${circumference}`);

// const xii= 5;
// let y= 7;y++;
// let z= xii+y;
// console.log(xii,y,z);
// let circum;
// const pi=3.14;
// document.getElementById("mybutton").onclick=function(){
//     radius=document.getElementById("mytext").value;
//     radius=Number(radius);
//     circum=2*pi*radius;
//     document.getElementById("myh2").textContent= `The circumference of the circle is ${circum}`;


// }


// // COUNTER PROGRAM
// let x=0;
// x=Number(x);
// document.getElementById("b1").onclick=function(){
//      x--;
//     document.getElementById("countLabel").textContent=x;
// }
// document.getElementById("b2").onclick=function(){
//     x=0
//     document.getElementById("countLabel").textContent=x;
// }
// document.getElementById("b3").onclick=function(){
//      x++;
//     document.getElementById("countLabel").textContent=x;
// }


// Math = built-in object that provides a
// collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

//z = Math. round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.ppw(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// RANDOM NUMBER GENERATOR:
// document.getElementById("buttons").onclick=function(){
//     document.getElementById("h2").textContent=Math.floor(Math.random()*6)+1;
// }



// IF Statements

// let age=25;
// let drivingLicense= true;

// if(age>16 && drivingLicense==true){
//     console.log(`You are eligible to drive legally`);
// }
// else if(age>16 && drivingLicense==false){
//     console.log(`You are old enough to drive but dont have a license`);
// }
// else{
//     console.log(`You are not old enough to drive`);
// }



// .checked = property that determines the checked state of an
// HTML checkbox or radio button element

// const cb= document.getElementById("mycb");
// const visa= document.getElementById("visa");
// const mastercard= document.getElementById("mastercard");
// const paypal= document.getElementById("paypal");
// const subresult= document.getElementById("subresult");
// const result= document.getElementById("result");
// const button= document.getElementById("buttons");

// window.addEventListener('pageshow', () => {
//     document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(el => el.checked = false);
//     document.getElementById('subresult').textContent = '';
//     document.getElementById('result').textContent = '';
// });

// button.onclick=function(){
//     if(cb.checked){
//         subresult.textContent=`Nice! You are subscribed to the channel.`;

//     }
//     else{
//         subresult.textContent=`You are not subscribed to the channel \`:(\``;
//     }
    
//     if(visa.checked){
//         result.textContent=`You are paying through VISA`;
    
//     } 
//     else if(mastercard.checked){
//         result.textContent=`You are paying through MasterCard`;
        
//     }
//     else if(paypal.checked){
//         result.textContent=`You are paying through PayPal`;
        
//     }
//     else{
//         result.textContent=`You must choose a payment method!`;
//     }    


    
// }



2

// ternary operator = a shortcut to if{} and else{} statements
// helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;





// let age = 21;

// let message;

// if(age >= 18){
// message = "You're an adult";

// else{
// message = "You're an minor"
// }


// let drivinglicense=window.prompt(`Do you have a license`);

// console.log(drivinglicense);
// let message= drivinglicense ? `You have a driving license`:`You dont have a driving license`;
// console.log(message);

// let purchase= 110;
// let discount= purchase>=100?10:0;
// console.log(`your total is $${purchase-purchase*(discount/100)}`);

// let testscore=66;
// let grade;

// switch(true){
//     case testscore>=90:
//         grade='A';
//         console.log(`Your grade is ${grade}`);
//         break;
//     case testscore>=80 && testscore<90:
//         grade='B';
//         console.log(`Your grade is ${grade}`);
//         break;
//     case testscore>=70 && testscore<80:
//         grade='C';
//         console.log(`Your grade is ${grade}`);
//         break;
//     case testscore>=60 && testscore<70:
//         grade='D';
//         console.log(`Your grade is ${grade}`);    
//         break;
//     default:
//         console.log(`Your grade is F(Failure)`);
// }


// string methods = allow you to manipulate and work with text (strings)

// let userName = "subhash";

// console.log(userName.charAt(1));
// console.log(userName.indexOf('b'));
// console.log(userName.lastIndexOf('h'));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));
// console.log(userName.startsWith('s')); //gives boolean
// console.log(userName.endsWith('s'));   //gives boolean
// console.log(userName.includes('s'));   //gives boolean

// let phone='34-43434-4-333-3';
// hero=phone.replaceAll('-','');
// let hero1=hero.padStart(20,"1");
// console.log(hero1);
// let hero2=hero.padEnd(20,"1");
// console.log(hero2);

// let fullname = 'subhash dasari';
// let firstname= fullname.slice(0,fullname.indexOf(' '));
// firstname=firstname.toUpperCase();
// console.log(`your first name is ${firstname}`);
// let lastname= fullname.slice(fullname.indexOf(' ')+1);
// lastname=lastname.toUpperCase();
// console.log(`your last name is ${lastname}`);

// const email= 'subhashm.dasari@gmail.com';
// let username=email.slice(0,email.indexOf('@'));
// username=username.toUpperCase();
// console.log(`welcome ${username}`);
// let mail=email.slice(email.indexOf('@')+1,email.lastIndexOf('.'));
// mail=mail.toUpperCase();
// console.log(`it is confirmed that you use ${mail}`);


// Method Chaining
// username=window.prompt(`Enter your name`);
// username=username.trim();
// firstletter=username.charAt(0).toUpperCase();
// extras=username.toLowerCase().slice(1);
// console.log(`Welcome ${firstletter+extras}`);

// // palindrome function
// let isPalindrome='123abba321';
// function Palindrome(isPalindrome){
//     isPalindrome= String(isPalindrome);
//     for(let i=0;i<isPalindrome.length/2;i++){
//         if(isPalindrome[i]!==isPalindrome[isPalindrome.length-1-i]){
//             return false;
//         }
//         }

//   return true;
// }

// console.log(Palindrome(isPalindrome))

// method chaning
// without
// let username= window.prompt("what is ur name bro?");
// username=username.trim();
// let letter =username.charAt(0);
// letter= letter.toUpperCase();
// let extrachars= username.slice(1);
// extrachars=extrachars.toLowerCase();
// username=letter+extrachars;
// console.log(username);

// with method chaining
// let peru=window.prompt("what is ur name huh");
// console.log(peru=peru.trim().charAt(0).toUpperCase() + peru.trim().slice(1).toLowerCase());


// prime number check

// function isprime(num){
//     num=Number(num);
//     let count=0;
//     for(i=1;i<=num/2;i++){
//         if (num%i==0){
//             count++;
//         }
//     }    
//     if(count==1){
//         return true;
//     }
    
// return false;
// }
// console.log(isprime(7))
// let num= 63
// let arr=[32,34,11,63,22,67,78,37];
// arr=arr.sort((a,b)=>a-b);
// function binsearch(arr,num,start=0,end=arr.length-1){
// let mid=Math.floor((start+end)/2);
// if (start>end) return -1;
// if(arr[mid]==num){
//  return mid;
//  }
//  else if (arr[mid]>num){
//      return binsearch(arr,num,start,mid-1);
// }
// else return binsearch(arr,num,mid+1,arr.length-1);
// }



// console.log(binsearch(arr,num));