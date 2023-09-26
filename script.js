
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
    const container3 = document.createElement("div");
    const container4 = document.createElement("div");
    const container2 = document.createElement("div");
    const yourScore = document.createElement("div");
    const computerScore = document.createElement("div");
    const gameResult = document.createElement("div");
    let roundResult = "pending";
    document.body.appendChild(container3);
    document.body.appendChild(container4);
    document.body.appendChild(container2);
    document.body.appendChild(yourScore);
    document.body.appendChild(computerScore);
    document.body.appendChild(gameResult);
    let computerDisplay = "Awaiting";
    let humanDisplay = "Awaiting";
    container2.textContent = roundResult;
    container3.textContent = computerDisplay;
    container4.textContent = humanDisplay;
    yourScore.textContent = "Your score: 0";
    computerScore.textContent = "Computer score: 0";
    gameResult.textContent = "Game in progress";

    

    function checkScore(){
        if (computerWins == 5 || playerWins == 5){
            if (computerWins == 5){
                gameResult.textContent = "You lost the game!";
            } else {
                gameResult.textContent = "You won the game!";
            }
        }
    };

    
    btn1.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let outcome = playRound("rock", computerChoice);
        outcome = outcome.slice(0, 5);
        container3.textContent = `Computer chooses ${computerChoice}`;
        container4.textContent = "You choose rock";
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
            yourScore.textContent = `Your score: ${playerWins}`;
            checkScore();
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
            computerScore.textContent = `Computer score: ${computerWins}`;
            checkScore();
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
            checkScore();
        }});

    btn2.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let outcome = playRound("paper", computerChoice);
        outcome = outcome.slice(0, 5);
        container3.textContent = `Computer chooses ${computerChoice}`;
        container4.textContent = "You choose paper";
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
            yourScore.textContent = `Your score: ${playerWins}`;
            checkScore();
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
            computerScore.textContent = `Computer score: ${computerWins}`;
            checkScore();
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
            checkScore();
        }});

    btn3.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let outcome = playRound("scissors", computerChoice);
        outcome = outcome.slice(0, 5);
        container3.textContent = `Computer chooses ${computerChoice}`;
        container4.textContent = "You choose scissors";
        if (outcome == "You w"){
            playerWins++;
            roundResult = "You win the round!"
            container2.textContent = roundResult;
            yourScore.textContent = `Your score: ${playerWins}`;
            checkScore();
        } else if (outcome == "You l"){
            computerWins++;
            roundResult = "You lose the round!"
            container2.textContent = roundResult;
            computerScore.textContent = `Computer score: ${computerWins}`;
            checkScore();
        } else {
            roundResult = "It's a draw!";
            container2.textContent = roundResult;
            checkScore();
        }});

        
        
    
}

// Add a running score and text that gives outcome of round