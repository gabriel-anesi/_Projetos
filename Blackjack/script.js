let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false; //At first, you don't have a blackjack
let isAlive = true; //you start the game alive
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');//let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    messageEl.textContent = message;
}

function newCard() {
    let card = 7;
    sum += card
    renderGame();
}
