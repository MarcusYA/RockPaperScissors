const oponentChoiceDisplay = document.getElementById('oponentChoiceDisplay');
const yourChoiceDisplay = document.getElementById('yourChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const buttonPushed = document.querySelectorAll('.button');
let userChoice

buttonPushed.forEach(button => button.addEventListener('click', () => {
    userChoice = button.textContent;
    yourChoiceDisplay.innerHTML = userChoice;
    randomNumber()
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