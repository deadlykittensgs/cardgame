// game variables 
let totalBet = 0
let dealersMoney = 1000
let playersMoney = 1000

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
//const visableCard = document.getElementById("visableCard")


// dynamic text
// visableCard.innerText = `${getCards()}`
// flippedCard.innerText = `${getCards()}`
// playerCardOne.innerText = `${getCards()}`
// playerCardTwo.innerText = `${getCards()}`
//on click
deal.addEventListener("click", () => dealGame()) // make deal cards
betOne.addEventListener("click", () => bet(1)) // make add to bet
betTwo.addEventListener("click", () => bet(10)) // make add to bet
hitMe.addEventListener("click", hit) // gives player a card
stand.addEventListener("click", () => console.log("run the game")) //runs the





// functions

// game starts empty page 

// bet amount is decided
function bet(bet) {
    playersMoney = playersMoney - bet
    totalBet = totalBet + bet
    betTotal.innerText = `Bet: ${totalBet}`
    playersMoneySlot.innerText = `${playersMoney}`
   
}


// bets are placed and the cards are dealt

function dealGame() {
console.log("deal game run")

    betTotal.innerText = "IN GAME"

    // dealers hand 
    let dealersCardOne = getCards()
    visableCard.innerText = `${dealersCardOne}`
    let dealersCardTwo = getCards()
    flippedCard.innerText = `${dealersCardTwo}`
    let dealersHandValue = dealersCardOne + dealersCardTwo // dealer hand value
    dealersTotal.innerText = `${dealersHandValue}`
    

   // users hand
    let userCardOne = getCards()
    playerCardOne.innerText = `${userCardOne}`
    let userCardTwo = getCards()
    playerCardTwo.innerText = `${userCardTwo}`
    let userHandValue = userCardOne + userCardTwo  // user hand value
    userTotal.innerText = `${userHandValue}` 


    
    if (dealersHandValue === 21 && userHandValue !== 21 ) {
        console.log("Dealer Wins")
    }

    if (dealersHandValue >22 && dealersHandValue > userHandValue) {
        Stand(totalBet, dealerWins)
    }
 
    if (userHandValue >22 && userHandValue > dealersHandValue) {
        Stand(totalBet, userWins)
    }
    if (userHandValue === dealersHandValue ) {
        console.log("push")
    }
}

function Strand() {
    if (dealersHandValue < userHandValue) {
    dealerNewCard = document.createElement('div')
    newCard.class = "dealerHand"
    cardForDealer = `${getCards()}`
    newCard.innerText = cardForDealer
    computersHand.appendChild(dealerNewCard)

    }

}



function giveMoney(whoWon) {
    if (dealerWins) {
        dealersMoney = dealersMoney + (totalBet * 2)
        totalBet = 0
    }
    if (userWins) {
        playersMoney = playersMoney + (totalBet * 2) 
        totalBet = 0
    }
}

function hit() {
    newCard = document.createElement('div')
    newCard.class = "userHand"
    newCard.innerText = `${getCards()}`
    userHand.appendChild(newCard)

    if (userHandValue > 21) {
        console.log('Dealer Wins')
    }
    
}


// function ContinueGame() {
//     if (userHandValue < 21) {
//         console.log("dealer wins")
//     }
// }



// get a card 
function getCards() {
    let cardShuffle = Math.floor(Math.random() * 11) +1  
     return cardShuffle
 
 }