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
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev + curr;
      break;
    case "/":
      if (curr === 0) {
        result = "Error";
      } else {
        result = prev / curr;
      }
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

equalsButton.addEventListener("click", () => {
  if (currentOperand === "" || previousOperand === "" || operator === null) return;
  calculate();
  operator = null;
});

decimalButton.addEventListener("click", () => {
  if (shouldResetDisplay) {
    currentOperand = "0.";
    shouldResetDisplay = false;
  } else if (!currentOperand.includes(".")) {
    currentOperand += ".";
  }
  updateDisplay(currentOperand);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperand === "" && previousOperand === "") return;
    if (previousOperand !== "" && operator !== null) {
      calculate();
    }
    operator = button.value; // set the new operator
    previousOperand = currentOperand; // store result as previous operand for next operation
    currentOperand = "";
    shouldResetDisplay = true;
  });
});
