
 // Function to save a value of to localStorage
 function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Function to retrieve a value from localStorage
  function getFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

// function called to add players money to local storage 
let money = getFromLocalStorage('money') || 1000; // Assign players money to the saved value or if no value is saved 1000
saveToLocalStorage('money', money); // Save the updated counter to localStorage






// game variables 
let totalBet = 0
let dealersMoney = Infinity
let playersMoney = money
let userHandValue = 0
let dealersHandValue = 0
let dealersCardTwo = 0

// buttons from html 
const dealersTotal = document.getElementById("dealersTotal")
const userTotal = document.getElementById("usersValueHolder")
const deal = document.getElementById("deal")
const betTotal = document.getElementById("betTotal")
const betOne = document.getElementById("betOne")
const visableCard = document.getElementById("visableCard")
const flippedCard = document.getElementById("flippedCard")
const playerCardOne = document.getElementById("playerCardOne")
const hitMe = document.getElementById("hit")
const userHand = document.getElementById("userHand")
const stand = document.getElementById("stand")
const playersMoneySlot = document.getElementById("playersMoney")
const whoWon = document.getElementById("whoWon")
const nextHandClick = document.getElementById("nextHand")
const newGame = document.getElementById("newGame")

//on click listeners 
deal.addEventListener("click", () => dealGame()) // make deal cards
betOne.addEventListener("click", () => bet(1)) // make add to bet
betTwo.addEventListener("click", () => bet(10)) // make add to bet
hitMe.addEventListener("click", () => hit(userHandValue)) // gives player a card
stand.addEventListener("click", () => standHit(userHandValue,dealersHandValue)) //runs the
newGame.addEventListener("click", ()=> newGameFunction()) // clear local storage




// assign the players money value on load in 
playersMoneySlot.innerText = `${playersMoney}`


// functions

// step 1: game starts empty page 



// Step 2: bet amount is decided and stored in local storage 
function bet(bet) {
    
    playersMoney = playersMoney - bet
    totalBet = totalBet + bet
    betTotal.innerText = `Bet: ${totalBet}`
    money = playersMoney
    saveToLocalStorage('money', money);
    playersMoneySlot.innerText = `${playersMoney}`
}



// Step 3: bets are locked in and the cards are dealt

function dealGame() {

console.log("deal game run")
//remove event listener from the bet box to prevent future bets
 userHandValue = getUsersHand()
 dealersHandValue = getDealersHand()

    if (dealersHandValue === 21 && userHandValue !== 21 ) {

        // if dealer blackjack show the dealers hand
        dealersTotal.innerText = `${dealersHandValue}`
        flippedCard.innerText = `${dealersCardTwo}`

        whoWon.innerText = "Dealer Blackjack:  "
        nextHand = document.createElement('button')
        nextHand.innerText = "Next Hand"
        nextHand.id= 'nextHand'
        whoWon.appendChild(nextHand)
        // click next hand to reset the game 
        nextHand.addEventListener("click", () => unplug())
    }
}
//This function gets the users hand
function getUsersHand () {
      // users hand
      let userCardOne = getCards()
      playerCardOne.innerText = `${userCardOne}`
      let userCardTwo = getCards()
      playerCardTwo.innerText = `${userCardTwo}`
      let userHandValue = userCardOne + userCardTwo  // user hand value
      userTotal.innerText = `${userHandValue}` 
      return userHandValue
}

// This function gets the dealers hand (but does not show the second card)
function getDealersHand() {
        // dealers hand 
        let dealersCardOne = getCards()
        visableCard.innerText = `${dealersCardOne}`
         dealersCardTwo = getCards()
        //flippedCard.innerText = `${dealersCardTwo}`
        let dealersHandValue = dealersCardOne + dealersCardTwo // dealer hand value
        dealersTotal.innerText = `${dealersCardOne}`
        return dealersHandValue
}





function standHit(user) {
    
    // this loop runs until the dealer wins or loses drawing the dealer cards (needs a stand on 17 added)
    while (dealersHandValue < user && dealersHandValue < 22 ) {
    dealerNewCard = document.createElement('div')
    dealerNewCard.innerText = `${getCards()}`
    dealersHandValue = dealersHandValue + parseInt(dealerNewCard.innerText) 
    computersHand.appendChild(dealerNewCard)
    dealersTotal.innerText = `${dealersHandValue}` 
    }
   // after the loop is finished these if statements run a function to handle the winner
    if (dealersHandValue === userHandValue) {
        push()
    }

    if (dealersHandValue >21) {
     
        PlayerWins()
    }
    if (dealersHandValue < 22 && dealersHandValue > userHandValue ) {
    
        dealerWins()
    }


}

// Once a dealer clicks the hit button this function gives them another card
function hit() {
    console.log("hit")
    newCard = document.createElement('div')
    newCard.innerText =`${getCards()}`
    userHandValue = userHandValue + parseInt(newCard.innerText) 
    userHand.appendChild(newCard)
    userTotal.innerText = `${userHandValue}` 
    if (userHandValue >21) {
        dealerWins()
       
    }
}

// What happens if the dealer wins
function dealerWins() {
    console.log("Dealer Wins")

    dealersTotal.innerText = `${dealersHandValue}`
    flippedCard.innerText = `${dealersCardTwo}`

    whoWon.innerText = "Dealer Wins:  "
    nextHand = document.createElement('button')
    nextHand.innerText = "Next Hand"
    nextHand.id= 'nextHand'
    whoWon.appendChild(nextHand)
    nextHand.addEventListener("click", () => unplug())
    resetGame('dealer')


}
// What happens if the player wins
function PlayerWins() {

    dealersTotal.innerText = `${dealersHandValue}`
    flippedCard.innerText = `${dealersCardTwo}`

    console.log("player Wins")
    whoWon.innerText = "Player Wins:  "
    nextHand = document.createElement('button')
    nextHand.innerText = "Next Hand"
    nextHand.id= 'nextHand'
    whoWon.appendChild(nextHand)
    nextHand.addEventListener("click", () => unplug())
    resetGame("player")
   

    

}


// This function tells what happens if the player and user tie 
function push() {
// needs game reset with bet pushed
whoWon.innerText = "Push"
nextHand = document.createElement('button')
nextHand.innerText = "Next Hand"
nextHand.id= 'nextHand'
whoWon.appendChild(nextHand)
nextHand.addEventListener("click", () => unplug())


}


function resetGame(winner) {

    // If player wins
if (winner === "player") {
    playersMoney = playersMoney + totalBet * 2
    money = playersMoney
    saveToLocalStorage('money', money);
    totalBet = 0
    console.log("playerGotMoney") 
} 
//if dealer wins 
if (winner === "dealer") {
    dealersMoney = dealersMoney + totalBet * 2
    totalBet = 0
    console.log("dealerGotMoney")
    
}
// if tie 
 
}
// This function refreshes the page to remove all dynamical created divs
function unplug() {
    location.reload()
}

// This function gets a "card"
function getCards() {
    let cardShuffle = Math.floor(Math.random() * 11) +1  
     return cardShuffle
 
 }

// This function will refresh the local storage resetting user money if the player goes broke
 function newGameFunction() {
    console.log("newGame")
    playersMoney = 1000
    money = playersMoney
    saveToLocalStorage('money', money);
    playersMoneySlot.innerText = `${playersMoney}`
    totalBet = 0
   
}


