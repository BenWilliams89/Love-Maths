
// Two types of event listeners - When page finishes loading & code when executed on button click

// Wait for the DOM to finish loading before running the game

// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!')
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`you clicked ${gameType}`)
            }
        })
    }
})

/**
 * The main game loop, called when the script is first loaded
 * and after yhe user's answer has been processed
 */

// function for run game
function runGame() {
 // creates two random numbers between 1 & 25 - the +1 removes 0 as a possible number
let num1 = Math.floor(Math.random() * 25) + 1
let num2 = Math.floor(Math.random() * 25) + 1
}



// function for check answers

function checkAnswer() {

}

// function for calculateCorrectAnswer

function calculateCorrectAnswer() {

}

// function for incrementScore

function incrementScore(){

}

// function for incrementWrongAnswer

function incrementWrongAnswer() {

}

//function for displayAdditionQuestion

function displayAdditionQuestion() {

}

//function for displaySubtractQuestion

function displaySubtractQuestion() {

}

//function for displayMultiplyQuestion

function displayMultiplyQuestion() {

}

//function for displayDivisionQuestion

function displayDivisionQuestion() {

}