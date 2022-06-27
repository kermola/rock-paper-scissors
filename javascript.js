function computerPlay() {
    const computerSelectionArray = [
        "rock",
        "paper",
        "scissors"
    ];
    return computerSelectionArray[Math.floor(Math.random()*computerSelectionArray.length)];
    console.log(computerSelectionArray[1]);
}

computerPlay();