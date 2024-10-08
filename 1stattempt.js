function checkAnswer() {

    // !Get Input Values
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let userAnswer = parseInt(document.querySelector('#answer').value);
    let operator = document.querySelector('select').value;
    let output = document.querySelector('#output');
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
        output.textContent = `Correct. Great job!`;
    } else if (operator == '/' && num2 == 0) {
        output.textContent = `Bruh. You can't divide by zero.`
    } else {
        count(correctAnswer);
    }

}



let btn = document.querySelector('button');


btn.addEventListener('click', checkAnswer);
btn.addEventListener('click', count);


// document.querySelector('button').addEventListener('click', count);








let i = 0;


function count(ans) {
    let output = document.querySelector('#output');


    if (i < 2) {
        output.textContent = `Incorrect. Try again!`;
        i++;
    } else {
        output.textContent = `The anser is ${ans}.`
    }

}




// while (i < 3) {

