const max = 11
const min = 2
const mapNumberToCard = {
    11 : 'A',
    10 : ['J','K','Q','10']
}

let initialDocument = document
let isAlive = true
let totalValue = 0

let gameQues = document.getElementById("game-ques")
let gameCards = document.querySelector("#game-cards")
let gameSum = document.getElementById("game-sum")
let startGameBtn = document.querySelector("#start-btn")
let newCardBtn = document.querySelector('#new-card-btn')
let showCardBtn = document.querySelector('#show-btn')

function convertToFaceValue(number) {
    if (number === 10) {
        return mapNumberToCard[number][Math.floor(Math.random()*4)]
    }
    else if (number === 11) {
        return mapNumberToCard[number]
    }
    else {
        return number
    }
}

function resetGame() {
    gameQues.textContent = "Want to play a round ?"
    gameCards.textContent = "Cards:"
    gameSum.textContent = "Sum:"
    isAlive = true
}

function blackJackCondition(currentValue) {
    let message = ""
    if (currentValue === 21) {
        message = "You have won"
        isAlive = false
    }
    else if (currentValue < 21) {
        message = "Do you want to draw a new card"
    }
    else {
        message = "You have lost"
        isAlive = false
    }
    gameQues.textContent = message  
    startGameBtn.style.display = "none"
    newCardBtn.style.display = "inline"
    showCardBtn.style.display = "inline"
    if (!isAlive) {
        startGameBtn.style.display = "inline"
        newCardBtn.style.display = "none"
        showCardBtn.style.display = "none"
    }
}

function startGame() {
    resetGame()
    let firstCard = Math.floor(Math.random() * (max - min + 1)) + min;
    let secondCard = Math.floor(Math.random() * (max - min + 1)) + min;
    totalValue = firstCard + secondCard
    console.log(totalValue)
    gameCards.textContent +=  convertToFaceValue(firstCard) + " " + convertToFaceValue(secondCard)
    gameSum.textContent = "Sum: " + totalValue
    blackJackCondition(totalValue)
}

function drawNewCard() {
    let newCardValue = Math.floor(Math.random() * (max - min + 1)) + min;
    totalValue +=newCardValue
    console.log(totalValue)
    gameCards.textContent += " " + convertToFaceValue(newCardValue)
    gameSum.textContent = "Sum: " + totalValue
    blackJackCondition(totalValue)
}

function showCards() {
    let dealerCardValue = Math.floor(Math.random() * (21 - 17 + 1)) + 17;
    if (dealerCardValue <= totalValue) {
        gameQues.textContent = "Dealer Cards Value is " + dealerCardValue + ", You have Won"
    }
    else {
        gameQues.textContent = "Dealer Cards Value is " + dealerCardValue + ", You have Lost"
    }
    startGameBtn.style.display = "inline"
    newCardBtn.style.display = "none"
    showCardBtn.style.display = "none"
}