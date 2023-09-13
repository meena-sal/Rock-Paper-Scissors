
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
        return "Draw!";
    }
}
