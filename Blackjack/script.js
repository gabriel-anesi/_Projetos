let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false; //At first, you don't have a blackjack
let isAlive = true; //you start the game alive
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');//let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');


function getRandomCard() {
    return Math.round(Math.random()*13) + 1;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards;
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
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card
    cards.push(card);
    console.log(cards);
    renderGame();
}