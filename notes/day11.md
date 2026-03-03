rock paper scissors project :
const myRock=document.getElementById("rock");
const myPaper=document.getElementById("paper");
const mySci=document.getElementById("sci");
const myPlay=document.getElementById("player");
const myComp=document.getElementById("computer");
const result=document.getElementById("result");
const pscore=document.getElementById("pscore");
const cscore=document.getElementById("cscore");
let players=0;
let computers=0;
let game=["rock","paper","scissors"];


function playGame(mchoice){
    const computerplay=game[Math.floor(Math.random()*3)];
    myPlay.textContent=mchoice;
    if(mchoice==computerplay){
        myComp.textContent=mchoice;
        result.textContent="IT's a TIE!";
    }
        
    else{
        switch(mchoice){
            case "scissors":if(computerplay=="paper"){
                myComp.textContent="paper";
                result.textContent="YOU WIN!";
                pscore.textContent=players++;
                }
                            else{
                                myComp.textContent="rock";
                                result.textContent="YOU LOSE!";
                                cscore.textContent=computers++;

                            }                
                            break;
            case "rock":if(computerplay=="scissors"){
                myComp.textContent="scissors";
                result.textContent="YOU WIN!";
                pscore.textContent=players++;
                }
                            else{
                                myComp.textContent="paper";
                                result.textContent="YOU LOSE!";
                                cscore.textContent=computers++;

                            }                
                            break;
            case "paper":if(computerplay=="rock"){
                myComp.textContent="rock";
                result.textContent="YOU WIN!";
                pscore.textContent=players++;
                }
                            else{
                                myComp.textContent="scissors";
                                result.textContent="YOU LOSE!";
                                cscore.textContent=computers++;

                            }                
                            break;                                 
        }
    }
        
                            
    }