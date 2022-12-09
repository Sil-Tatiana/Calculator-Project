let displayValue = "0";
let firstValue;
let secondValue;
let firstOperator;
let secondOperator;
let result;

const getAllButtons = document.querySelectorAll("button");

function displayNumber() {
  const display = document.querySelector(".display");
  display.innerText = displayValue;
  if (displayValue.length > 6) {
    display.innerText = displayValue.substring(0, 6);
  }
}

displayNumber();

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, op) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "x") {
    return multiply(num1, num2);
  } else if (op === "/") {
    if (num2 === 0) {
      return "Oh!NO!No!";
    } else {
      return divide(num1, num2);
    }
  }
}

function getSingleValues() {
  for (let i = 0; i < getAllButtons.length; i++) {
    getAllButtons[i].addEventListener("click", function () {
      if (getAllButtons[i].classList.contains("num-btn")) {
        // console.log(getAllButtons[i]);
        showValues(getAllButtons[i].textContent);
        displayNumber();
      } else if (getAllButtons[i].classList.contains("btn-operation")) {
        operatorValue(getAllButtons[i].textContent);
      } else if (getAllButtons[i].classList.contains("btn-equals")) {
        equals();
        displayNumber();
      } else if (getAllButtons[i].classList.contains("btn-clear")) {
        clearDisplay();
        displayNumber();
      } else if (getAllButtons[i].classList.contains("btn-dot")) {
        decimalValue(getAllButtons[i].textContent);
        displayNumber();
      }
    });
  }
}

getSingleValues();

function showValues(number) {
  if (displayValue === "0" || displayValue === 0) {
    return (displayValue = number);
  } else if (displayValue === firstValue) {
    return (displayValue = number);
  } else {
    return (displayValue += number);
  }
}

function operatorValue(operator) {
  if (firstOperator != null && secondOperator === null) {
    secondOperator = operator;
    secondValue = displayValue;
    result = operate(Number(firstValue), Number(secondValue), firstOperator);
    displayValue = roundIt(result);
    firstValue = displayValue;
  } else if (firstOperator != null && secondOperator != null) {
    secondValue = displayValue;
    result = operate(Number(firstValue), Number(secondValue), secondOperator);
    secondOperator = operator;
    displayValue = roundIt(result);
    firstValue = displayValue;
  } else {
    firstOperator = operator;
    firstValue = displayValue;
  }
}

function equals() {
  if (firstOperator === null) {
    displayValue = displayValue;
  } else if (secondOperator != null) {
    secondValue = displayValue;
    result = operate(Number(firstValue), Number(secondValue), secondOperator);
    if (result === "Oh!NO!") {
      displayValue = "Oh!NO!";
    } else {
      displayValue = roundIt(result);
      firstValue = displayValue;
    }
  } else {
    secondValue = displayValue;
    result = operate(Number(firstValue), Number(secondValue), firstOperator);
    if (result === "Oh!NO!") {
      displayValue = "Oh!NO!";
    } else {
      displayValue = roundIt(result);
      firstValue = displayValue;
    }
  }
}

function clearDisplay() {
  displayValue = "0";
  firstValue;
  secondValue;
  firstOperator;
  secondOperator;
  result;
}

function decimalValue(dot) {
  if (displayValue === firstValue || displayValue === secondValue) {
    displayValue = "0";
    displayValue += dot;
  } else if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

function roundIt(number) {
  if (number > 12) {
    return number.toPrecision(9);
  }
}
