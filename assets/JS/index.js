const oponentChoiceDisplay = document.getElementById('oponentChoiceDisplay');
const yourChoiceDisplay = document.getElementById('yourChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const buttonPushed = document.querySelectorAll('.button');
let userChoice

buttonPushed.forEach(button => button.addEventListener('click', () => {
    userChoice = button.textContent;
    yourChoiceDisplay.innerHTML = userChoice;
}));
console.log(userChoice);