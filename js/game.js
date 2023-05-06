// Define an array of valid choices for the game.
const CHOICES = [`Rock`, `Paper`, `Scissors`];

// Initialize a counter for the number of wins the player has.
let playerWins = 0;

// Define the number of wins required to win the game.
const WINING_SCORE = 5;

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
    const randomIndex = Math.floor(Math.random() * CHOICES.length);

    // return the random choice from the array choices
    return CHOICES[randomIndex];
}

/**
 * Prompts the player to enter their choice of "Rock", "Paper", or "Scissors" and validates their input.
 * 
 * @param {string} message - The prompt message to display to the player. Defaults to 'Please enter "Rock", "Paper" or "Scissors": '.
 * @returns {string|undefined} - The validated player's choice of "Rock", "Paper", or "Scissors" with the first letter capitalized, or "Exit" if the player cancels or enters an empty value.
*/
function player_play(message = 'Please enter "Rock", "Paper" or "Scissors": ') {

    // Prompt the player for their input
    let userInput = prompt(message);

    // If user input is not empty value 
    if (userInput == "") {
        userInput = "Wrong";
        // Check if player cancelled
    } else
        if (userInput === null) {
            return "Exit";
        }

    // Convert the player's input to lowercase and capitalize the first letter
    userInput = userInput.toLocaleLowerCase();
    userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());

    // Check if player's input is invalid
    while (!CHOICES.includes(userInput)) {
        // Prompt the player again for a valid input
        userInput = prompt(`Invalid choice! Please enter "Rock", "Paper", or "Scissors"`);

        // If user input is not empty value 
        if (userInput == "") {
            userInput = "Wrong";
            // Check if player cancelled
        } else if (userInput === null) {
            userInput = "Exit";
            break;
        }

        userInput = userInput.toLocaleLowerCase();
        userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());
    }

    // Return the validated player's choice
    return userInput;
}

/**
 * Plays a single round of the rock-paper-scissors game and prints the result to the console.
 *
 * @param {string} playerSelection - The player's choice of "Rock", "Paper", or "Scissors".
 * @param {string} computerSelection - The computer's randomly generated choice of "Rock", "Paper", or "Scissors".
 *
 * @returns {undefined} This function does not return anything.
 */
function play_round(playerSelection, computerSelection) {

    // Check if the player and computer selections are the same then it's a tie
    if (playerSelection === computerSelection) {

        console.log(`It's a Tie! ${playerSelection} V.S ${computerSelection}`);

        // Check if the player wins by comparing their selection with the computer's selection
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {

        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

        // Increment the player's win count and log the result
        playerWins++;
        console.log(`Your score: ${playerWins} wins!`);

        // The player loses if none of the above conditions are met
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

/**
 * This function runs the Rock, Paper, Scissors game until the player wins the specified number of rounds.
 * It uses a while loop to repeatedly call the player_play() and computer_play() functions and pass their
 * results to the play_round() function until the player has won the specified number of rounds or chooses
 * to exit the game.
 *
 * @return {undefined}
 */
function game() {

    // Loop until the player wins the specified number of rounds
    while (playerWins < WINING_SCORE) {

        // Get the computer's selection
        const computerSelection = computer_play();

        // Get the player's selection
        const playerSelection = player_play();

        // If the player does not choose to exit the game
        if (playerSelection !== "Exit") {

            // Play a round of the game with the player and computer selections
            play_round(playerSelection, computerSelection);

            // If the player chooses to exit the game
        } else {

            // Display the player's final score
            console.log(`Game will stop now! Your score is: ${playerWins}`)

            // Prompt the player to refresh the page to play again
            console.log("Please refresh the page to play again!")

            // Exit the while loop
            break;
        }
    }
}

// Trigger the game function to start playing the game.
game();
