const oponentChoiceDisplay = document.getElementById('oponentChoiceDisplay');
const yourChoiceDisplay = document.getElementById('yourChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const buttonPushed = document.querySelectorAll('.btn');
let userChoice
const yourScore = document.getElementById("yourScore");
const oponentScore = document.getElementById("oponentScore");
let oponentChoice

buttonPushed.forEach(btn => btn.addEventListener('click', () => {
    userChoice = btn.textContent;
    yourChoiceDisplay.innerHTML = userChoice;
    randomNumber()
    resultShow()
}));

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1 
    
    if (randomNumber === 1) {
      oponentChoice = 'ROCK'
    }
    if (randomNumber === 2) {
      oponentChoice = 'SCISSORS'
    }
    if (randomNumber === 3) {
      oponentChoice = 'PAPER'
    }
    if (randomNumber === 4) {
        oponentChoice = 'LIZARD'
      }
      if (randomNumber === 5) {
        oponentChoice = 'SPOCK'
      }
    oponentChoiceDisplay.innerHTML = oponentChoice
  }

  function resultShow() {
    if (oponentChoice === userChoice) {
      result = 'Draw!'
    }
    if (oponentChoice === 'ROCK' && userChoice === "PAPER") {
      result = "Gratulations - You won!"
      yourScore.innerHTML = parseInt(yourScore.innerHTML)+1 
    }
    if (oponentChoice === 'SPOCK' && userChoice === "PAPER") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1 
      }
    if (oponentChoice === 'PAPER' && userChoice === "LIZARD") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1
    }
    if (oponentChoice === 'SPOCK' && userChoice === "LIZARD") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1
      }
    if (oponentChoice === 'SCISSORS' && userChoice === "SPOCK") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1
      }
    if (oponentChoice === 'ROCK' && userChoice === "SPOCK") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1
      }
    if (oponentChoice === 'LIZARD' && userChoice === "ROCK") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1  
    }
    if (oponentChoice === 'SCISSORS' && userChoice === "ROCK") {
        result = "Gratulations - You won!"
      yourScore.innerHTML = parseInt(yourScore.innerHTML)+1 
      }
    if (oponentChoice === 'LIZARD' && userChoice === "SCISSORS") {
        result = "Gratulations - You won!"
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1
    }
    if (oponentChoice === 'PAPER' && userChoice === "SCISSORS") {
        result = "Gratulations - You won!"
      yourScore.innerHTML = parseInt(yourScore.innerHTML)+1 
      }
      if (oponentChoice === 'PAPER' && userChoice === "ROCK") {
        result = "Sorry - You lost!"
          oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1 
      }
      if (oponentChoice === 'PAPER' && userChoice === "SPOCK") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1 
        }
      if (oponentChoice === 'LIZARD' && userChoice === "PAPER") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
      }
      if (oponentChoice === 'LIZARD' && userChoice === "SPOCK") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
        }
      if (oponentChoice === 'SPOCK' && userChoice === "SCISSORS") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
        }
      if (oponentChoice === 'SPOCK' && userChoice === "ROCK") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
        }
      if (oponentChoice === 'ROCK' && userChoice === "LIZARD") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1  
      }
      if (oponentChoice === 'ROCK' && userChoice === "SCISSORS") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
        }
      if (oponentChoice === 'SCISSORS' && userChoice === "LIZARD") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
      }
      if (oponentChoice === 'SCISSORS' && userChoice === "PAPER") {
        result = "Sorry - You lost!"
        oponentScore.innerHTML = parseInt(oponentScore.innerHTML)+1
        }
    resultDisplay.innerHTML = result
  }
