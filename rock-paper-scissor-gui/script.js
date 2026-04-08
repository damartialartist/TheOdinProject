console.log("Hello world")

function getComputerChoice() {
    let randNum = Math.random() * 3;
    if (randNum < 1) {
        return "rock"
    } else if (randNum < 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let userChoice = prompt("Input rock/paper/scissor")
    return userChoice.toLowerCase();
}




function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`You: ${humanChoice}, CPU: ${computerChoice}, Tie`)
            return;
        }
        if (humanChoice === "paper") {
            (computerChoice === "scissor") ? computerScore++ : humanScore++;
        } else if (humanChoice === "rock") {
            (computerChoice === "scissor") ? humanScore++ : computerScore++;
        } else if (humanChoice === "scissor") {
            (computerChoice === "rock") ? computerScore++ : humanScore++; 
        }
        
        console.log(`You: ${humanChoice}, CPU: ${computerChoice}`)
        console.log(`Current Score: You: ${humanScore}, CPU: ${computerScore}`);
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanSelection, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("You Lose")
    } else {
        console.log("Tie")
    }

}

playGame();