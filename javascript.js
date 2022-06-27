// Function to randomly return "Rock", "Paper", or "Scissors"
function computerPlay() {
    const computerSelectionArray = [
        "rock",
        "paper",
        "scissors"
    ];
    return computerSelectionArray[Math.floor(Math.random()*computerSelectionArray.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log("Computer chose " + computerSelection);
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return ("Draw! You both chose the same thing");
    }
    else if ((playerSelection == "rock" && computerSelection =="scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
        const playerSelectionUpperCased = playerSelection.replace(/(^\w)/g, m => m.toUpperCase());
        const computerSelectionUpperCased = computerSelection.replace(/(^\w)/g, m => m.toUpperCase());
        return ("You win! " + playerSelectionUpperCased + " beats " + computerSelectionUpperCased + ".");
        }
    else {
        return ("Not yet coded!");
    }
}