/*----- constants -----*/
const spacemanImage = document.querySelector(".spaceman-box img")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector(".guesses-text p")
const keyboardDiv = document.querySelector(".keyboard")
const gameModal = document.querySelector(".game-modal")
const playAgainBtn = document.querySelector(".play-again")

let currentWord, correctLetters, wrongGuessCount
const maxGuesses = 6

const resetGame = () => {
    // Resetting all game variables and UI elements
    correctLetters =[]
    wrongGuessCount = 0
    spacemanImage.src = `pics/spaceman-${wrongGuessCount}.jpeg`
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false)
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("")
    gameModal.classList.remove("show")
}

const getRandomWord = () => {
    // selecting a random word and hint from the worldList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
    currentWord = word
    console.log(word)
    document.querySelector(".hint-text p").innerHTML = hint
    resetGame()
    
}

const gameOver = (isVictory) => {
    // After some time after game is complete, show modal with relevant details
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`
        gameModal.querySelector("img").src = `pics/${isVictory ? 'victory' : 'lost'}.jpeg`
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Earth is saved!' : 'Earth is destroyed!'}`
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`
        gameModal.classList.add("show") 
    }, 1000)
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


// creating keyboard buttons on page/ add event listener 
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button")
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
} 





getRandomWord()
playAgainBtn.addEventListener("click", getRandomWord)

