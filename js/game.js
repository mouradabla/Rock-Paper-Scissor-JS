
/**
 * Returns a randomly generated choices of 'Rock', 'Paper', or 'Scissors'.
 * The function uses Math.random() to generate a random index within the range of the choices array,
 * and returns value at that index. The function should return a different result each tim it is called.
 * as the random index is generated using a combination of Math.random and Math.floor() to avoid repeating
 * the same result multiple times in a row
 * 
 * @returns {string} A randomly generated choices of 'Rock', 'Paper', or 'Scissors'.
 */
function computerPlay() {

    // constant array contains all the possible choices, 3, from the computer
    const choices = [`Rock`, `Paper`, `Scissors`];

    // random number between 0 and 2
    const random_index = Math.floor(Math.random() * choices.length);

    // return the random choice from the array choices
    return choices[random_index];
}

// computer_selection holds the random choices result
const computer_selection = computerPlay();


/**
 * Prompts the user to give a choise of "Rock", "Paper", or "Scissors".
 * The function uses prompt() to gather user input and force title case afterwords.
 * Then it returns the input as a string.
 * 
 * @returns {string} User input choices of "Rock", "Paper", or "Scissors".
 */
function player_play() {
    let userInput = false;
    let playerSelection;

    // Asks for input from user until valid input is given
    while (userInput == false) {
        try {
            userInput = prompt("Please input either rock, paper or scissors: ");
            playerSelection = userInput.toLowerCase();
        }
        catch (TypeError) {
            // Handle cancel button error
            playerSelection = "exit";
        }
        
        // Forces title case
        playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
        
        // Handle invalid user inputs
        switch (playerSelection) {
            case "Rock":
                break;
            case "Paper":
                break;
            case "Scissors":
                break;
            case "Exit":
                break;
            case false:
                break;
            default:
                console.log(`'${userInput}' is an invalid input. Please input either Rock, Paper or Scissors`);
                userInput = false;
        }
    }

    // return the user input
    return userInput;
}

// playerSelection holds the user input result
const playerSelection = player_play();