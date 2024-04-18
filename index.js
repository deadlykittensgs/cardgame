// game variables 
const deck = [ 1,2,3,4,5,6,7,8,9,10]
const totalBet = 0
let playersHandValue = 0
let dealersHandValue = 0
let dealersMoney = 1000000000000000000000
let playersMoney = 1000

// buttons from html 
const name = document.getElementById()
const name2= document.getElementById()








// functions






function Bet(bet) {
let totalBet = totalBet + bet

}

function getCards() {
   
 let cardShuffle = Math.floor(Math.random() * 52) 

}
getCards(console.log(cardShuffle))


function StartGame() {

    // dealersHandValue == 2 cards
    // userHandValue == 2 cards

    if (dealersHandValue === 21 && userHandValue !== 21 ) {
        console.log("Dealer Wins")
    }
    else {
        ContinueGame()
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