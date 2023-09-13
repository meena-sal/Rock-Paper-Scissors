
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        return "rock";
    } else if (random == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors";
    } else {
        return "Draw! ";
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("Rock, paper, or scissors?");
        let outcome = playRound(playerInput, getComputerChoice());
        outcome = outcome.slice(0, 5);
        if (outcome == "You w"){
            playerWins++;
            console.log("You win the round!");
        } else if (outcome == "You l"){
            computerWins++;
            console.log("You lose the round!");
        } else {
            console.log("It's a draw!");
        }
    }
    if (playerWins > computerWins){
        console.log("You win the whole game!");
    } else if (playerWins < computerWins){
        console.log("You lose the whole game!")
    } else {
        console.log("The game is a draw!");
    }
}