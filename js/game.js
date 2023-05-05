// constant array contains all the possible choices, 3, from the computer
const CHOICES = [`Rock`, `Paper`, `Scissors`];
let playerWins = 0;
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

function player_play(message = 'Please enter "Rock", "Paper" or "Scissors": ') {

    let userInput = prompt(message);

    // Check if player's Cancel or enter empty value break;
    if (userInput === null || userInput === "") {
        return "Exit";
    }

    userInput = userInput.toLocaleLowerCase();
    userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());

    // Check if player's input is invalid
    while (!CHOICES.includes(userInput)) {
        userInput = prompt(`Invalid choice! Please enter "Rock", "Paper", or "Scissors"`);

        userInput = userInput.toLocaleLowerCase();
        userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());
    }

    return userInput;
}

function play_round(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        console.log(`It's a Tie! ${playerSelection} V.S ${computerSelection}`);

    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {

        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        playerWins++;
        console.log(`Your score: ${playerWins} wins!`);

    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game_play() {

    //
    while (playerWins < WINING_SCORE) {

        // computer_selection holds the random choices result
        const computerSelection = computer_play();
        const playerSelection = player_play();

        if (playerSelection !== "Exit") {

            play_round(playerSelection, computerSelection);
        } else {
            console.log(`Game will stop now! Your score is: ${playerWins}`)

            console.log("Please refresh the page to play again!")

            break;
        }
    }
}

game_play();
