function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function playRound(player, computer){
    let playerSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();
    if (playerSelection == computerSelection){
        return "It's a Draw";
    }
    else if( (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock")){
        return "You Win";
    }
    else{
        return "You Lose";
    }
}

function playGame(){
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++){
        
        let playerSelection = prompt("Rock, Paper, or Scissors");
        let results =  playRound(playerSelection, getComputerChoice());
        if(results == "You Win"){
            playerScore++;
        }else if(results == "You Lose"){
            compScore++;
        }
        console.log(results);
        console.log("Player: "+playerScore+" Computer: "+compScore);

    }
    if (playerScore > compScore){
        console.log("You Win")
    }else if(playerScore<compScore){
        console.log("You Lose");
    }else{
        console.log("It's a Draw");
    }
}
