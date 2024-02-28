/*----- constants -----*/
const spacemanImage = document.querySelector(".spaceman-box img")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector(".guesses-text p")
const keyboardDiv = document.querySelector(".keyboard")
const gameModal = document.querySelector(".game-modal")

let currentWord, correctLetters =[], wrongGuessCount = 0
const maxGuesses = 6

const getRandomWord = () => {
    // selecting a random word and hint from the worldList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
    currentWord = word
    console.log(word)
    document.querySelector(".hint-text p").innerHTML = hint
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("")
    
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        gameModal.classList.add("show")
    }, 300)
}


const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter exists on the currentWord
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter)
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
            }
        })
    } else {
        // if clicked letters doesn't exist then update the wrongGuessCount and spaceman image
        wrongGuessCount++
        spacemanImage.src = `pics/spaceman-${wrongGuessCount}.jpeg`


    }

    button.disabled = true
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`

    //calling gameOver function if any of these conditions are met
    if (wrongGuessCount === maxGuesses) return gameOver(false)
    if(correctLetters.length === currentWord.length) return gameOver(true)
}

/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/
// creating keyboard buttons on page/ add event listener 
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
} 


/*----- functions -----*/


getRandomWord()














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