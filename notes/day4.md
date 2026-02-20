// random passwrod generator


function randomPasswordGenerate(passlen,low,up,num,spchar){

const lowalp="abcdefghijklmnopqrstuvwxyz";
const upalp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums="1234567890";
const spchars="!@#$%^&*()_+-=";
let password="";
let allowedchars="";

allowedchars+=low?lowalp:"";
allowedchars+=up?upalp:"";
allowedchars+=num?nums:"";
allowedchars+=spchar?spchars:"";

    
    if (passlen<7){
        return `passwrod length cannot be ${passlen}. It has to be 7 chars atleast`;

    }
    if(allowedchars.length==0){
        return 'you must choose one of the criterias for password';
    
    }
    for(let i=0;i<passlen;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password+=allowedchars.split("")[randomindex];
    }
    return password;

}

console.log(randomPasswordGenerate(14,true,true,true,true));