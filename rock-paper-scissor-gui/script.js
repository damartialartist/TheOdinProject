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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
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

        

}

const humanChoiceButtons = document.getElementById("button-container")

humanChoiceButtons.addEventListener('click', (e) => {
    const choice = e.target.id;
});