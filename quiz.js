let attempts = 0;

function checkAnswer() {
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let userAnswer = parseInt(document.querySelector('#answer').value);
    let operator = document.querySelector('select').value;
    let output = document.querySelector('#output');
    let correctAnswer;

    //! Determine Correct Answer
    if (operator === '+') {
        correctAnswer = num1 + num2;
    } else if (operator === '-') {
        correctAnswer = num1 - num2;
    }
    else if (operator === 'x') {
        correctAnswer = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            output.textContent = `Bruh. You can't divide by zero.`;
            return;
        }
        correctAnswer = num1 / num2;
    }

    //! Check User's Answer
    if (userAnswer === correctAnswer) {
        output.textContent = `Correct. Great job!`;
        attempts = 0; // Resets attempts if correct
    } else {
        attempts++;
        if (attempts < 3) {
            output.textContent = `Incorrect. Try again! (Attempt ${attempts} of 3)`;
        } else {
            output.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
            attempts = 0; // Resets attempts after showing the answer
        }
    }

}

document.querySelector('button').addEventListener('click', checkAnswer);