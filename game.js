game();



function game() {
    // Prompt player to choose RPS (0=Rock, 1=Paper, 2=Scissors)
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

    console.log(playerSelection)
    gameplay(playerSelection, computerSelection)
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
}
