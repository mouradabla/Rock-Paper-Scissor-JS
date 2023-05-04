
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

let round_winner = function (playerSelection, computer_selection){
    if (playerSelection===`Rock` && computer_selection===`Paper`){
            return `Computer`;
        }else if (playerSelection===`Rock` && computer_selection===`Scissors`){
            return `Player`;
        }else if (playerSelection===`Scissors` && computer_selection===`Rock`){
            return `Computer`;
        }else if (playerSelection===`Scissors` && computer_selection===`Paper`){
            return `Player`;
        }else if (playerSelection===`Paper` && computer_selection===`Scissors`){
            return `Computer`;
        }else if (playerSelection===`Paper` && computer_selection===`Rock`){
            return `Player`;
        }else {
            return `Tie`;
        }
        
}