// game variables 
let totalBet = 0
let dealersMoney = 1000
let playersMoney = 1000
let userHandValue = 0
let dealersHandValue = 0

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


//on click
deal.addEventListener("click", () => dealGame()) // make deal cards
betOne.addEventListener("click", () => bet(1)) // make add to bet
betTwo.addEventListener("click", () => bet(10)) // make add to bet
hitMe.addEventListener("click", () => hit(userHandValue)) // gives player a card
stand.addEventListener("click", () => standHit(userHandValue,dealersHandValue)) //runs the


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


 userHandValue = getUsersHand ()
 dealersHandValue =getDealersHand()


    console.log(userHandValue)
    console.log(dealersHandValue)

    if (dealersHandValue === 21 && userHandValue !== 21 ) {
        dealersMoney = dealersMoney + (totalBet * 2)
        totalBet = 0
        console.log("dealer Blackjack")
    }



}

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


function getDealersHand() {
        // dealers hand 
        let dealersCardOne = getCards()
        visableCard.innerText = `${dealersCardOne}`
        let dealersCardTwo = getCards()
        flippedCard.innerText = `${dealersCardTwo}`
        let dealersHandValue = dealersCardOne + dealersCardTwo // dealer hand value
        dealersTotal.innerText = `${dealersHandValue}`
        return dealersHandValue
}





function standHit(user, dealer) {

    console.log("stand")
    if (dealer < user && dealer < 22 ) {
    dealerNewCard = document.createElement('div')
    dealerNewCard.innerText = `${getCards()}`
    dealersHandValue = dealersHandValue + parseInt(dealerNewCard.innerText) 
    computersHand.appendChild(dealerNewCard)
    dealersTotal.innerText = `${dealersHandValue}` 
    }

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

function hit(userHV) {
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


function dealerWins() {
    console.log("Dealer Wins")
    dealersMoney = dealersMoney + totalBet * 2
    totalBet = 0

    document.body.removeChild()

    //needs to reset game

}

function PlayerWins() {
    console.log("player Wins")
    playersMoneyMoney = playersMoney + totalBet * 2
    totalBet = 0

    //needs to reset game

}

function push() {



}

// get a card 
function getCards() {
    let cardShuffle = Math.floor(Math.random() * 11) +1  
     return cardShuffle
 
 }
