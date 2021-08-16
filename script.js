let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
let rndNum = Math.floor(Math.random() * 10);
return rndNum;
};

function compareGuesses(humanGuess, computerGuess, secretTargetGuess ){

      //humanGuess = Math.floor(Math.random() * 10);
      //computerGuess = Math.floor(Math.random() * 10);
      //secretTargetGuess = generateTarget();

    //console.log(humanGuess);
    //console.log(computerGuess);
    //console.log(secretTargetGuess);

    let humanVal = Math.abs(secretTargetGuess - humanGuess);
    let computerVal = Math.abs(secretTargetGuess - computerGuess);

        if(humanVal > 9 || humanVal < 0 ){
            alert('Please enter a number between 0 and 9');

         if (humanVal > computerVal)
            return true ;
            else 
            return false;

};

function updateScore(winner){

    if (winner === 'human')
        humanScore ++;
    //console.log(humanScore);
    else if(winner === 'computer')
        computerScore ++
     //console.log(humanScore)
    

}

function advanceRound (){
    currentRoundNumber ++ ;
}

