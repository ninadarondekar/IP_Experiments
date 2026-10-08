"use strict";
function calci(op) {
    // 1. Grab the elements once to improve performance
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultElement = document.getElementById("result");
    // 2. Validate that inputs are not empty before converting to numbers
    if (num1Input.value.trim() === "" || num2Input.value.trim() === "") {
        resultElement.textContent = "Please enter both numbers";
        resultElement.style.color = "#ef4444"; // Error red
        return;
    }
    let num1 = Number(num1Input.value);
    let num2 = Number(num2Input.value);
    let result = 0;
    // Reset color to normal in case there was a previous error
    resultElement.style.color = "#111827";
    // 3. Perform the calculation
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Prevent division by zero
            if (num2 === 0) {
                resultElement.textContent = "Cannot divide by zero";
                resultElement.style.color = "#ef4444";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 0;
    }
    // 4. Update the DOM exactly once
    resultElement.textContent = "Result: " + result;
}
