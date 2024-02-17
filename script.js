function playRound(playerSelection, computerSelection) {
    //Create a random number between 1 & 3

    function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
    }

//Assign the random number by the computer
    switch (getComputerChoice()) {
        case 1 :computerSelection = "rock";
        break;

        case 2 : computerSelection = "paper";
        break;

        case 3 : computerSelection= "scissors";
        break;
    }

    playerSelection = prompt("Rock, paper, scissors ?");


    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw !");
    }

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        alert("You lose ! Paper beats rock...");
    }

    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        alert("You win ! Rock beats scissors...");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        alert("You win ! Paper beats rock...");
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        alert("You lose ! Scissors beats paper...");
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        alert("You lose ! Rock beats scissors...");
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        alert("You win ! Scissors beats paper...");
    }
    
    else {
        alert("You didn't choose right...")
    }
}

console.log(playRound());