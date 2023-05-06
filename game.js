game();



function game() {
    // Prompt player to choose RPS (0=Rock, 1=Paper, 2=Scissors)
    let playerScore = 0;

    for (let roundNo = 1; roundNo < 6; roundNo++) {
        let playerSelection = parseInt(prompt(`Welcome to Rock Paper Scissors! Game of 5! 
    Choose your selection:
    1 = Rock,
    2 = Scissors,
    3 = Paper`))

        switch (playerSelection) {
            case 1:
                playerSelection = "rock";
                break;
            case 2:
                playerSelection = "scissors";
                break;
            case 3:
                playerSelection = "paper";
                break;
            default:
                console.log("Please enter number 1-3 only!")
        }

        let computerSelection = getComputerChoice();

        console.log(`You chose ${playerSelection}!`)
        console.log(`Versus ${computerSelection}!`)
        let roundWin = gameplay(playerSelection, computerSelection);

        console.log(roundNo)
        if (roundWin) {
            playerScore += 1
        }
    }

    if (playerScore >= 3) {
        console.log(playerScore)
        console.log("You are the winner!!!")
    } else {
        console.log("NOOB")
    }
}

// Generate random computer choice for RPS
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    //Gets random index from choices (0-2)
    let rand = Math.floor(Math.random() * choices.length);
    //Gets element based on the random index generated
    let computerSelection = choices[rand];
    return computerSelection;
}

// Compare player selection and computer selection
function gameplay(playerSelection, computerSelection) {
    let roundWin = false

    if (playerSelection === computerSelection) {
        console.log("Draw!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Loser!")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Loser!")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Loser!")
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("Winner!")
        roundWin = true;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("Winner!")
        roundWin = true;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("Winner!")
        roundWin = true;
    }

    return roundWin;
}
