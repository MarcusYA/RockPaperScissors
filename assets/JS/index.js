const oponentChoiceDisplay = document.getElementById('oponentChoiceDisplay');
const yourChoiceDisplay = document.getElementById('yourChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const buttonPushed = document.querySelectorAll('.button');
let userChoice
const yourScore = document.getElementById("yourScore").innerText;
const oponentScore = document.getElementById("oponentScore").innerText;
let oponentChoice

buttonPushed.forEach(button => button.addEventListener('click', () => {
    userChoice = button.textContent;
    yourChoiceDisplay.innerHTML = userChoice;
    randomNumber()
    resultShow()
}));

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1) {
      oponentChoice = 'ROCK'
    }
    if (randomNumber === 2) {
      oponentChoice = 'SCISSORS'
    }
    if (randomNumber === 3) {
      oponentChoice = 'PAPER'
    }
    oponentChoiceDisplay.innerHTML = oponentChoice
  }

  function resultShow() {
    if (oponentChoice === userChoice) {
      result = 'Draw!'
    }
    if (oponentChoice === 'ROCK' && userChoice === "PAPER") {
      result = "Gratulations - You won!"
      
    }
    if (oponentChoice === 'ROCK' && userChoice === "SCISSORS") {
      result = 'Sorry - You lost!'
      
      
    }
    if (oponentChoice === 'PAPER' && userChoice === "SCISSORS") {
      result = "Gratulations - You won!"
      
    }
    if (oponentChoice === 'PAPER' && userChoice === "ROCK") {
      result = 'Sorry - You lost!'
      
    }
    if (oponentChoice === 'SCISSORS' && userChoice === "ROCK") {
      result = "Gratulations - You won!"
      
    }
    if (oponentChoice === 'SCISSORS' && userChoice === "PAPER") {
      result = 'Sorry - You lost!'
      
    }
    resultDisplay.innerHTML = result
  }

  
