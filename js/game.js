/* Define changable global variables */
let choices = ["Rock", "Paper", "Scissors"];
let inputText = "Please input either rock, paper or scissors: "
const EXITMESSAGE = "Exiting..."

/**
 * Returns a randomly generated choices of 'Rock', 'Paper', or 'Scissors'.
 * The function uses Math.random() to generate a random index within the range of the choices array,
 * and returns value at that index. The function should return a different result each tim it is called.
 * as the random index is generated using a combination of Math.random and Math.floor() to avoid repeating
 * the same result multiple times in a row
 * 
 * @returns {string} A randomly generated choices of 'Rock', 'Paper', or 'Scissors'.
 */
function computer_play() {
    // random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    // return the random choice from the array choices
    return choices[randomIndex];
}

/**
 * Prompts the player to enter their choice of "Rock", "Paper", or "Scissors" and validates their input.
 * 
 * @returns {string} User input choices of "Rock", "Paper", or "Scissors".
 */
function player_play() {
    let userInput = false;
    let playerSelection;
        
    // Asks for input from user until valid input is given
    while (userInput == false) {
        userInput = prompt(inputText);

        // Force lower case
        try {
            playerSelection = userInput.trim().toLowerCase();
        }
        catch (TypeError) {
            // Handle cancel button error
            playerSelection = "exit";
        }
        
        // Forces title case
        if (playerSelection != "") {
            playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
        }
        
        // Enable easter egg
        if (["Lizard", "Spock"].includes(playerSelection) && choices.length == 3) {upgrade();}
        
        // Handle invalid user inputs
        if (!choices.includes(playerSelection) && playerSelection != "Exit") {
            console.log(`'${userInput}' is an invalid input. ` + inputText);
            userInput = false;
        }
    }
    
    // return the user input
    return playerSelection;
}

/**
 * Take input from player_input and computer_input.
 * Then determin the winner between the two and return winner.
 * 
 * @param playerSelection {string} User input choices of "Rock", "Paper", or "Scissors".
 * @param computerSelection {string} Random choices of "Rock", "Paper", or "Scissors".
 *
 * @returns {string} Winner of round
 */
function play_round(playerSelection, computerSelection) {
    // Exit function if exit is given
    if (playerSelection == "Exit") {return playerSelection;}
    
    // Turn inputs into numbers
    let computerNumber = choices.indexOf(computerSelection)
    let playerNumber = choices.indexOf(playerSelection)
    
    // Create outcome texts
    let playerWinText = `Congrats, you won! ${playerSelection} beates ${computerSelection}.`;
    let playerLoseText = `Too bad, you lost! ${computerSelection} beates ${playerSelection}.`;
    let playerTieText = `Ohh, its a tie! ${computerSelection} is the same as ${playerSelection}.`;
    
    /* Calculate winner aritmetically and return results */
    if (playerNumber == computerNumber) {
        console.log(playerTieText);
        return "both";
    }
    else if (playerNumber % 2 - computerNumber % 2 == 0 && playerNumber < computerNumber ||
             playerNumber % 2 - computerNumber % 2 != 0 && playerNumber > computerNumber) {
        console.log(playerWinText);
        return "player";
    }
    else if (playerNumber % 2 - computerNumber % 2 == 0 && playerNumber > computerNumber ||
             playerNumber % 2 - computerNumber % 2 != 0 && playerNumber < computerNumber) {
        console.log(playerLoseText);
        return "computer";
    }
    else {
        console.log("Something went wrong!")
        return "both";
    }
}

/**
 * Function to run a five round game.
 *
 * @returns {array|string} Player and computer scores or 'Exit' if user wants to exit
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    console.log(`The game has begun!\nChoose either Rock, Paper or Scissors in the input window.
The computer will choose an option and after 5 rounds, the winner is the one with the most points.`);
    
    // run 5 rounds and count points
    let winner;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1))
        
        winner = play_round(player_play(), computer_play());
        
        switch (winner) {
            case "Exit":
                console.log(EXITMESSAGE);
                return "Exit";
                break;
            case "player":
                playerScore += 1;
                break;
            case "computer":
                computerScore += 1;
                break;
            case "both":
                break;
            default:
                console.log("Something went wrong!");
        }
    }
    return [playerScore, computerScore];
}

/**
 * Determines the winner and tells player in the console
 *
 * @returns Zero if exiting from a tie, else one
 */
function determin_winner(playerScore, computerScore) {
    // Determine winner of game
    if (playerScore == computerScore) {
        console.log("Its a tie! Your score is " + playerScore + ". Computers score is " + computerScore);
        console.log("Starting another round for you!");
        downgrade();
        return run_program();
    }
    else if (playerScore > computerScore) {
        console.log("You won! Your score is " + playerScore + ". Computers score is " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("You lost! Your score is " + playerScore + ". Computers score is " + computerScore);
    }
    else {
        console.log("Something went wrong =(!");
    }
    
    return 1;
}

/**
 * Prompts the user if they want an new game or not
 *
 */
function ask_new_game() {
    // Checking if user wants another round
    let userInput = false;
    while (userInput == false) {
        try {
            userInput = prompt("Do you want to start another round? Yes or No: ").trim().toLowerCase();
        }
        catch (TypeError) {
            console.log("If you want to exit in the future, just input no.");
            console.log(EXITMESSAGE);
            return 0;
        }
        
        switch (userInput) {
            case "yes":
                if (choices.length > 3) {
                    downgrade();
                }
                run_program();
                break;
            case "no":
                console.log(EXITMESSAGE);
                break;
            default:
                console.log("'" + userInput + "' is an invalid input! Please choose either Yes or No");
                userInput = false;
        }
    }
}

/**
 * Runs the program by calling game, then determining winner by calling determin_winner and
 * ask if user wants another round by calling ask_new_round
 *
 * @returns {number} Zero if run correctly
 */
function run_program() {
    // Run a game
    let scores = game();
    
    // Check for exit
    if (scores == "Exit") {return 0;}
    
    // Determin winner
    let exitVariable = determin_winner(scores[0], scores[1]);
    
    if (exitVariable == 0) {return 0;}
    
    // Ask user if they want another round
    ask_new_game();
    
    return 0; // Exit program
}

/**
 * Simple function to enable the easter egg mode.
 */
function upgrade() {
    choices.push("Spock", "Lizard");
    inputText = `${inputText.slice(0, -14)}, ${inputText.slice(-10, -3)}, lizard or spock ;) : `
    console.log("Oh, so you want to be funny? Then lets be funny!");
}

/**
 * Simple function to remove the easter egg mode.
 */
function downgrade() {
    choices.pop();
    choices.pop();
    inputText = "Please input either rock, paper or scissors: ";
}

run_program(); // Runs program if file is loaded