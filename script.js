  /* 
    Blackjack Project
    By William Collins
  */

// Card Varibles
  let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'  ];

// DOM Varibles
let textArea = document.getElementById('text-area'),
  newGameButton = document.getElementById('new-game-button'),
  hitButton = document.getElementById('hit-button'),
  stayButton = document.getElementById('stay-button');

// Game Varibles
let gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function() {
 gameStarted = true;
 gameOver = false;
 playerWon = false;
 
  deck = createDeck();
  dealerCards = [getNextCard(), getNextCard() ];
  playerCards = [getNextCard(), getNextCard() ];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

// CreateDeck Function
function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = {
          suit: suits[suitIdx],
          value: values[valueIdx]
        };
        deck.push( card );
     }
   }
  return deck;
}


function getCardString( card ) {
  return card.value + ' of ' + card.suit;
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
}

function getNextCard() {
    return deck.shift();
}


/*deck = createDeck();


 playerCards = [getNextCard(), getNextCard() ];

  console.log("Welcome to Blackjack!");

  console.log("You are dealt: ");
  console.log(" " + getCardString(playerCards[0]) );
  console.log(" " + getCardString(playerCards[1]) );
  
*/
