
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
    // for (let i = 0; i < 5; i++){
    //     let playerInput = prompt("Rock, paper, or scissors?");
        // let outcome = playRound(playerInput, getComputerChoice());
        // outcome = outcome.slice(0, 5);
        // if (outcome == "You w"){
        //     playerWins++;
        //     console.log("You win the round!");
        // } else if (outcome == "You l"){
        //     computerWins++;
        //     console.log("You lose the round!");
        // } else {
        //     console.log("It's a draw!");
        // }
    // }
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const container1 = document.createElement("div");
    btn1.setAttribute('id', 'rock');
    btn2.setAttribute('id', 'paper');
    btn3.setAttribute('id', 'scissors');
    btn1.textContent = "rock";
    btn2.textContent = "paper";
    btn3.textContent = "scissors";
    container1.appendChild(btn1);
    container1.appendChild(btn2);
    container1.appendChild(btn3);
    container1.style.display = 'flex';
    container1.style.justifyContent = 'space-evenly';
    container1.style.backgroundColor = "red";
    document.body.appendChild(container1);
    const container2 = document.createElement("div");
    let roundResult = "pending";
    document.body.appendChild(container2);
    container2.textContent = roundResult;


    btn1.addEventListener("click", () => {let outcome = playRound("rock", getComputerChoice());
        outcome = outcome.slice(0, 5);
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
        }});

    btn2.addEventListener("click", () => {let outcome = playRound("paper", getComputerChoice());
        outcome = outcome.slice(0, 5);
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
        }});

    btn3.addEventListener("click", () => {let outcome = playRound("scissors", getComputerChoice());
        outcome = outcome.slice(0, 5);
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
        }});

        
    if (playerWins > computerWins){
        console.log("You win the whole game!");
    } else if (playerWins < computerWins){
        console.log("You lose the whole game!")
    } else {
        console.log("The game is a draw!");
    }
}

// Add a running score and text that gives outcome of round