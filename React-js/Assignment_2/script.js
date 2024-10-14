
// script.js

let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString().slice(0, 10);
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}
