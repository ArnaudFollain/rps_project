function playGame() {
    let computerWins = 0;
    let playerWins = 0; 


    function score() {
        if (computerWins < playerWins) {
            alert("You win the game!");
        } else {
            alert("You lose the game!");
        }
    }
    //5* loop
    for (let i=0; i<5; i++) {
        playRound();   
    }

function playRound(playerSelection, computerSelection) {
                //Create a random number between 1 & 3

                function getComputerChoice() {
                return Math.floor(Math.random() * 3 + 1);
                }

                //Assign the random number by the computer to rock, paper, scissors
            switch (getComputerChoice()) {
                case 1 :computerSelection = "rock";
                break;

                case 2 : computerSelection = "paper";
                break;

                case 3 : computerSelection= "scissors";
                break;
            }

            //Assign the player choice
            playerSelection = prompt("Rock, paper, scissors ?");


            if (playerSelection.toLowerCase() === computerSelection) {
                alert("It's a draw !");
            }

            else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
                alert("You lose ! Paper beats rock...");
                computerWins += 1;
                return computerWins + 1;
            }

            else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
                alert("You win ! Rock beats scissors...");
                 playerWins = playerWins + 1;
                 return playerWins;
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
                alert("You win ! Paper beats rock...");
                 playerWins = playerWins + 1;
                 return playerWins;
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
                alert("You lose ! Scissors beats paper...");
                 computerWins = computerWins + 1;
                 return computerWins;
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
                alert("You lose ! Rock beats scissors...");
                 computerWins = computerWins + 1;
                 return computerWins;
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
                alert("You win ! Scissors beats paper...");
                 playerWins = playerWins + 1;
                 return playerWins;
            }
            
            else {
                alert("You didn't choose right...")
            }
        }
        
        score();
    }   
    
    playGame();
    

    