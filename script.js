// global variables
let currentOperand = "";
let previousOperand = "";
let operator = null;
let shouldResetDisplay = false;

// DOM elements
document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const numberButtons = document.querySelectorAll(".operand");
  const operatorButtons = document.querySelectorAll(".operator");
  const equalsButton = document.querySelector(".equals");
  const clearButton = document.querySelector(".clear");
  const decimalButton = document.querySelector(".decimal");
});

function updateDisplay(value) {
  display.textContent = value;
}

function getDisplayValue() {
  return display.textContent;
}
