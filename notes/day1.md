did all the basics through js on the project website.

<!-- swap 2 numbers without using a temporary variable
 let a=5;
 let b=6;
 let temps;
 temps=a;
 a=b;
 b=temps;
 console.log(a,b);

swap without temps


let a = 5;
let b = 6;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b); -->

string slicing
for java
let str= 'javascript';
console.log(str.slice(0,4));

for script
console.log(str.slice(4,));

// palindrome function
let isPalindrome='racecar';
function Palindrome(isPalindrome){
    isPalindrome= String(isPalindrome);
    for(let i=0;i<isPalindrome.length;i++){
        if(isPalindrome[i]!==isPalindrome[isPalindrome.length-1-i]){
            return false;
        }
        }

  return true;
}

console.log(Palindrome(isPalindrome))

let subu='racecar';
let hello='whatever';
function palin(str){
    str=String(str);
    if(str==str.split('').reverse().join('')){
        return true;
    }
return false;
}
console.log(palin(subu));


Sum of digits using while loop
function sumOfDigits(num) {
    // convert to number in case input is not a number
    num = Number(num);
    
    let sum = 0;

    while(num!=0){
        
        sum+=num%10;
        num= Math.trunc(num/10);
    }

    return sum;
}

// Test
console.log(sumOfDigits(2354435)); // Expected output: 10



function reverseNumber(num) {
    num = Number(num);
    let reversed = 0;
    while(num!==0){
        let last=num%10;
        reversed=reversed*10 +last;
        num=Math.trunc(num/10);
    }

    

    return reversed;
}

// Test
console.log(reverseNumber(12345)); // Expected output: 54321


// function factorial(num){
//     num=Number(num);
//     let fac=1;
//     // using while
//     // while(num>1){
//     // fac=fac*num;
//     // num--;
//     // // using for
//     // for(i=num;i>=1;i--){
//     //     fac=fac*i;
//     // }

//     //   return fac;  
//     // }

// // console.log(factorial(5));


// prime number check

function isprime(num){
    num=Number(num);
    let count=0;
    for(i=1;i<=num/2;i++){
        if (num%i==0){
            count++;
        }
    }    
    if(count==1){
        return true;
    }
    
return false;
}
console.log(isprime(7))