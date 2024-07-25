// global variables
let currentOperand = "";
let previousOperand = "";
let operator = null;
let shouldResetDisplay = false;

// DOM elements

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");

// functions
function updateDisplay(value) {
  display.textContent = value;
}

function getDisplayValue() {
  return display.textContent;
}

function calculate() {
  let result;
  const prev = previousOperand;
  const curr = currentOperand;
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev + curr;
      break;
    case "/":
      result = prev / curr;
      break;
    case "*":
      result = prev * curr;
      break;
    default:
      return;
  }
  currentOperand = result.toString(); // store result in currentOperand
  previousOperand = ""; // clear previousOperand
  updateDisplay(currentOperand);
  shouldResetDisplay = true; // Set the flag to reset display for new entry
}

// event listener
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldResetDisplay) {
      currentOperand = button.value;
      shouldResetDisplay = false;
    } else {
      if (getDisplayValue() === "0" && button.value !== ".") {
        currentOperand = button.value;
      } else {
        currentOperand += button.value;
      }
    }
    updateDisplay(currentOperand);
  });
});

clearButton.addEventListener("click", () => {
  currentOperand = "";
  previousOperand = "";
  operator = null;
  shouldResetDisplay = false;
  updateDisplay("0");
});
