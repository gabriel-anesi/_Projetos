const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let yourChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoiceDisplay()
    getResult()
}))

function generateComputerChoiceDisplay() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    if(randomNumber === 1) {
        computerChoice = "Rock"
    }
    if(randomNumber === 2) {
        computerChoice = "Scissors"
    }
    if(randomNumber === 3) {
        computerChoice = "Paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = "Draw!"
    }
    if (computerChoice === "Rock" && yourChoice === "Paper") {
        result = "You win!"
    }
    if (computerChoice === "Rock" && yourChoice === "Scissors") {
        result = "Computer wins!"
    }
    if (computerChoice === "Paper" && yourChoice === "Scissors") {
    result = "You win!"
    }
    if (computerChoice === "Paper" && yourChoice === "Rock") {
        result = "Computer wins!"
    }
    if (computerChoice === "Scissors" && yourChoice === "Rock") {
        result = "You win!"
    }
    if (computerChoice === "Scissors" && yourChoice === "Paper") {
        result = "Computer wins!"
    }
    resultDisplay.innerHTML = result
}