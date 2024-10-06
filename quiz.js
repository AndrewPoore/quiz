function checkAnswer() {
    // !Get Input Values
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let userAnswer = parseInt(document.querySelector('#answer').value);
    let operator = document.querySelector('select').value;
    let correctAnswer;

    //! Select Operator
    if (operator === '+') {
        correctAnswer = num1 + num2;
    } else if (operator === '-') {
        correctAnswer = num1 - num2;
    }
    else if (operator === 'x') {
        correctAnswer = num1 * num2;
    }
    else {
        correctAnswer = num1 / num2;
    }

    // !Check and display Answer
    if (userAnswer === correctAnswer) {
        document.querySelector('#output').innerHTML = `Correct. Great job!`;
    } else if (operator == '/' && num2 == 0) {
        document.querySelector('#output').textContent = `Bruh. You can't divide by zero.`
    }
    else {
        document.querySelector('#output').innerHTML = `Incorrect. Try again!`;
    }
}

document.querySelector('button').addEventListener('click', checkAnswer);