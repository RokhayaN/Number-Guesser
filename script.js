let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
let rndNum = Math.floor(Math.random() * 10);
console.log(rndNum)
};

function compareGuesses(humanGuess, computerGuess, secretTargetGuess ){

    let humanGuess = Math.floor(Math.random() * 10);
    let computerGuess = Math.floor(Math.random() * 10);
    let secretTargetGuess = generateTarget();

    console.log(humanGuess);
    console.log(computerGuess);
    console.log(secretTargetGuess);

    let humanVal = Math.abs(secretTargetGuess - humanGuess);
    let computerVal = Math.abs(secretTargetGuess - computerGuess);

if(humanVal === computerVal){
    return true ;
}else if (humanVal > computerVal){
    return true ;
}else if(computerValn < humanVal){
    return false;
}

};