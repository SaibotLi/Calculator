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
