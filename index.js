// game variables 
const deck = [ 1,2,3,4,5,6,7,8,9,10]
const totalBet = 0
let playersHandValue = 0
let dealersHandValue = 0
let dealersMoney = 1000000000000000000000
let playersMoney = 1000

// buttons from html 
const dealersTotal = document.getElementById("dealersTotal")
const userTotal = document.getElementById("usersValueHolder")

dealersTotal.innerText = `${dealersHandValue}`
userTotal.innerText = `${playersHandValue}` 






// functions

// game starts empty page 

// bet amount is decided

function Bet(bet) {
let totalBet = totalBet + bet

}


// bets are placed and the cards are dealt


// get a card 
function getCards() {
   let cardShuffle = Math.floor(Math.random() * 52) 
    return cardShuffle

}
console.log(getCards())


function StartGame() {

     // dealersHandValue == 2 cards
    let dealersCardOne = getCards()
    let dealersCardTwo = getCards()
    
    // userHandValue == 2 cards
    let userCardOne = getCards()
    let userCardTwo = getCards()

    let dealersHandValue = dealersCardOne + dealersCardTwo
    let userHandValue = userCardOne + userCardTwo
    
    if (dealersHandValue === 21 && userHandValue !== 21 ) {
        console.log("Dealer Wins")
    }
}

function ContinueGame() {
    if (userHandValue < 21) {
        console.log("dealer wins")
    }
}

function hit() {
    userHandValue = userHandValue + newCard
}