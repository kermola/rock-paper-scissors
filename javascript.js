// Function to randomly return "Rock", "Paper", or "Scissors"
function computerPlay() {
    const computerSelectionArray = [
        "rock",
        "paper",
        "scissors"
    ];
    return computerSelectionArray[Math.floor(Math.random()*computerSelectionArray.length)];
}

function playerWinRound() {
    playerRoundWins++;
}

function computerWinRound() {
    computerRoundWins++;
}
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerSelectionUpperCased = playerSelection.replace(/(^\w)/g, m => m.toUpperCase());
    computerSelectionUpperCased = computerSelection.replace(/(^\w)/g, m => m.toUpperCase());
    console.log("Computer chose " + computerSelectionUpperCased);
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        if (playerSelection == computerSelection) {
            return ("Draw! You both chose the same thing");
        }
        else if ((playerSelection == "rock" && computerSelection =="scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")) {
                playerWinRound();
                return ("You win! " + playerSelectionUpperCased + " beats " + computerSelectionUpperCased + ".");
            }
        else {
            computerWinRound();
            return ("You lose! " + computerSelectionUpperCased + " beats " + playerSelectionUpperCased + ".");
        }
    }
    else {
        computerWinRound();
        return ("Error: Gesture not recognized, you lose this round.");
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    playerRoundWins = 0;
    computerRoundWins = 0;
    for (let i = 0; i < 5; i++) {
        // let computerSelection = computerPlay();
        let gesture = prompt("What gesture will you play?");
        console.log("Round " + i + ":");
        console.log(playRound(gesture, computerPlay()));
    }
    if (playerRoundWins > computerRoundWins) {
        return ("You win the game, " + playerRoundWins + " rounds to " + computerRoundWins);
    }
    else if (playerRoundWins < computerRoundWins) {
        return ("You lose the game, " + playerRoundWins + " rounds to " + computerRoundWins);
    }
    else {
        return ("It's a tie!  You both won " + playerRoundWins + " rounds.");
    }
}

