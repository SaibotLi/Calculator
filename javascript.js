// Functions for = Add, Subtract, Multiply, Divide

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Create number, operator and another number variables. 

let number1 = 0;
let operator;
let number2 = 0;

// Create operate function takes an operator and 2 numbers and then call one of the above functions on the numbers

const operate = (operator, number1, number2) => {
switch (operator) {
    case "+":
        return add(number1, number2);
        case "-":
        return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
            case "/":
                return divide(number1, number2);
                default:
                    return "Invalid operator";
}
};

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 5, 3)); // Output: 2
console.log(operate('*', 5, 3)); // Output: 15
console.log(operate('/', 5, 3)); // Output: 1.6666666666666667
console.log(operate('%', 5, 3)); // Output: Invalid operator

// Create a function that populate display when you click numbers. store the display value in a variable somewhere.
const digitButtons = document.querySelectorAll(".digit"); //Select all digit buttons
const display = document.querySelector(".display");
let displayValue = ""; // Variable to store the display value

// Function to handle digit button clicks
function handleDigitClick(event) {
    const digit = event.target.textContent; // Get the digit from the clicked button
    displayValue += digit; // Append the digit to displayValue
    display.textContent = displayValue; // Update the display with the current displayValue
}

// Add event listener for digit buttons
digitButtons.forEach(button => {
    button.addEventListener("click", handleDigitClick);
});

/*
The Odin Project - NEW STEP
Make the calculator work! 
Store the first number and second number that are input into the calculator.
Utilize the operator that the user selects.
Operate() on the two numbers when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
Figure out how to store all the values and call the operate function with them. 
*/

// Step 1 - Identify which operator the user has selected (+, -, *, /).

const operatorButtons = document.querySelectorAll(".operator"); // Stores operator buttons

// Function to handle operator button clicks
function handleOperatorClick(event) {
    const inputOperator = event.target.textContent; // Get the operator from the clicked button
    displayValue += inputOperator; // Append the operator to the display value
    display.textContent = displayValue; // Update the display
}

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick);
});

// Step 2 - Store first and second number input by the user. As well as the operator.

/*
2) Store Numbers: Determine how to store the first and second numbers input by the user. 
3) Handle Equals Operator: When the user presses the "=" key, you need to call the operate() function with the stored numbers and the selected operator.
4) Update Display: After performing the operation using operate(), update the display with the result.
5) Reset Variables: After performing the calculation, reset the variables storing the numbers and operator if necessary, so the calculator is ready for the next operation.
6) Test Your Logic: Test your calculator with different scenarios to ensure it works correctly. Try adding, subtracting, multiplying, and dividing numbers.
*/

