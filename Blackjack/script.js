let player = {
    name: "Player",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let cards = [];
let sum = 0;
let hasBlackJack = false; //At first, you don't have a blackjack
let isAlive = false; //you must start the game to be assigned as alive
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');//let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');


let startButton = document.getElementById('start-button');
let newCardButton = document.getElementById('newcard-button');
let restartGame = document.getElementById('restart-button');

function getRandomCard() {
    let randomNumber = Math.round(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1 ) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    if (sum > 1) {
        startButton.style.display = 'none';
        newCardButton.style.display = 'block';

    }
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" - ");
    for(let i = 0; i > cards.length; i++) {
        cards.textContent += cards[i];
    }
    sumEl.textContent = "Sum: " + sum;    
    if (sum < 21) {
        message = "Do you want do draw a new card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    if (hasBlackJack === true) {
        newCardButton.style.display = 'none';
        restartGame.style.display = 'block';
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {        
        let card = getRandomCard();
        sum += card
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    if (isAlive === false) {
        newCardButton.style.display = 'none';
        restartGame.style.display = 'block';
    }
}

function restartButton() {
    location.reload()
}