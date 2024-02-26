/*----- constants -----*/
const keyboardDiv = document.querySelector(".keyboard")

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/
// creating keyboard buttons on page
for (let i = 97; i < 122; i++) {
    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
} 


/*----- functions -----*/

















// # Spaceman Game Pseudo-Code

// # Step 1: Initialize the Game

// Define a function called generateRandomWord() to select a random word from a predefined list of words.

// Define a function called displayWord() to display the word with underscores representing each letter.

// Define a function called takeGuess() to take user input for guessing a letter.

// Define a variable to keep track of the number of incorrect guesses allowed.

// Define a variable to store the randomly selected word.

// Define a variable to store the guessed letters

// #Step 2: Main Game Loop

// Loop until the game is won or the maximum number of incorrect guesses is reached:

// - Display the word with underscores and any correctly guessed letters revealed.

// - Prompt the user to guess a letter.

// - Validate the user input:
//     - Check if the input is a single letter.
//     - Check if the letter has already been guessed.

// - If the letter is correct:
//     - Update the word display to reveal the guessed letter(s).
//     - Check if the word has been fully guessed. If so, the player wins.

// - If the letter is incorrect:
//     - Decrease the number of remaining guesses.
//     - If the number of remaining guesses becomes zero, the player loses.

// - Display feedback to the player indicating if the guess was correct or incorrect.


// #Step 3: End Game

// If the player wins:
//     Display a victory message.
// If the player loses:
//     Display a defeat message.
// Ask the player if they want to play again.
// If yes, go back to Step 1 (Initialize the Game).
// If no, end the game.