// Two types of event listeners - When page finishes loading & code when executed on button click

// Wait for the DOM to finish loading before running the game

// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    // run this when page is finsihed loading as our default game option
    runGame('addition');
})

/**
 * The main game loop, called when the script is first loaded
 * and after yhe user's answer has been processed
 */

// function for run game
function runGame(gameType) {
 // creates two random numbers between 1 & 25 - the +1 removes 0 as a possible number
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
} else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknow game Type: ${gameType}. Aborting!`;
}

}



// function for check answers
/**
 * Checks the answer against the first element (userguess)
 * in the returned calculatedCorrectAnswer arrray
 */

function checkAnswer() {

let userAnswer =  parseInt(document.getElementById('answer-box').value);
let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = userAnswer === calculatedAnswer[0]

if (isCorrect) {
    alert( 'Hey you got it right :D')
    incrementScore();
} else {
    alert(`Awww..your answer is incorrect, you guessed ${userAnswer}. The correct answer is ${calculatedAnswer[0]} !`);
    incrementWrongAnswer()
}

runGame(calculatedAnswer[1]);


}

// function for calculateCorrectAnswer
/**
 *  Gets the operands (the numbers) and the operater (plus,minus etc)
 * directly from the DOM and returns the correct answer.
 */

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }
}

// function for incrementScore
/**
 * Gets the current score from the DOM and increments by one
 */
function incrementScore(){

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}


/**
 * Gets the current tally of incorrect answers from the DOM and increment it by 1
 */
// function for incrementWrongAnswer

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

//function for displayAdditionQuestion

function displayAdditionQuestion(operand1, operand2) {
document.getElementById('operand1').textContent = operand1;
document.getElementById('operand2').textContent = operand2;
document.getElementById('operator').textContent = '+';
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