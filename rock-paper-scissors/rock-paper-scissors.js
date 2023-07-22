const choices = {
    0 : "Rock",
    1 : "Paper",
    2 : "Scissors"
};

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomChoice () {
    let randomChoice = getRandomInt(0,2);
    return randomChoice;
}

function getComputerChoice () {
    return getRandomChoice();
}

function getPlayerChoice () {
    while (true) {
        let playerChoice = prompt("Choose rock, paper, or scissors: ");
        playerChoice = playerChoice.toLowerCase();
        switch (playerChoice) {
            case "rock":
                return 0;
            case "paper":
                return 1;
            case "scissors":
                return 2;
            default:
                console.log("Invalid answer.");
                break;
        }
    }
}

function winner (playerChoice, computerChoice) {
    // algorithm from https://stackoverflow.com/a/41458257
    if ((playerChoice + 1) % 3 == computerChoice) {
        return "computer";
    }
    else if (playerChoice == computerChoice) {
        return "draw";
    }
    else {
        return "player";
    }
}

function playRound (round) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose ${choices[playerChoice]}.`);
    console.log(`The computer chose ${choices[computerChoice]}.`);

    switch (winner(playerChoice, computerChoice)) {
        case "player":
            console.log(`You win round #${round}.`);
            return 1;
        case "computer":
            console.log(`You lose round #${round}.`);
            return -1;
        case "draw":
            console.log(`Round #${round} is a draw.`);
            return 0;
    }
}

function game () {
    let score = 0;

    for (let step = 0; step < 5; step++) {
        score += playRound(step + 1);
    }

    if (score > 0) {
        console.log("You win the match!");
    }
    if (score < 0) {
        console.log("You lose the match!");
    }
    if (score == 0) {
        console.log("The match is a draw!");
    }
}