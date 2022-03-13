const computerChoiseDisplay = document.getElementById("computer-choice")
const userChoiseDisplay = document.getElementById("user-choise")
const resultDisplay = document.getElementById("result")
let userChoise
let computerChoise
let result

const possibleChoices = document.querySelectorAll("button") // Velge alle knappene
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoise = e.target.id
        userChoiseDisplay.innerHTML = userChoise
        generateComputerChoise()
        getResult()
    })) // grabber klikkene
function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // velger den 0 så plusser den på 1, velger den 1 så plusser den på 1 osv {0,1,2}
        //console.log(randomNumber) test
    if (randomNumber === 1) {
        computerChoise = "rock"
    } else if (randomNumber === 2) {
        computerChoise = "scissors"

    } else {
        computerChoise = "paper"
    }
    computerChoiseDisplay.innerHTML = computerChoise
}


function getResult() {
    if (computerChoise === userChoise) {
        result = "its a draw!"
    }
    if (computerChoise === 'rock' && userChoise === 'paper') {
        result = "you win!"
    }
    if (computerChoise === "rock" && userChoise === 'scissors') {
        result = "you loose"
    }
    if (computerChoise === "paper" && userChoise === 'scissors') {
        result = "you loose"
    }
    if (computerChoise === "paper" && userChoise === 'rock') {
        result = "you win!"
    }
    if (computerChoise === "scissors" && userChoise === 'rock') {
        result = "you win"
    }
    if (computerChoise === "scissors" && userChoise === 'paper') {
        result = "you loose"
    }
    resultDisplay.innerHTML = result
}