//Create a random number between 1 & 3

function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

//Assign the random number by the computer
//let computerSelection = getComputerChoice();
let computerSelection;
switch (getComputerChoice()) {
    case 1 :computerSelection = "rock";
    break;

    case 2 : computerSelection = "paper";
    break;

    case 3 : computerSelection= "scissors";
    break;
}


//Assign the player choice


