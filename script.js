// select all the buttons/text outputs
// const allButtons = document.querySelector(".keys-btn");
const btnNumbers = document.querySelectorAll(".num-btn");
const btnOperations = document.querySelectorAll(".btn-operation");
const btnEquals = document.getElementsByClassName("btn-equals");
const btnClear = document.getElementsByClassName("btn-clear");
const btnDot = document.getElementsByClassName("btn-dot");
const display = document.querySelector(".display");

let btnValue = 0;
let operatorValue;

function getNumberValue() {
  btnNumbers.forEach((number) =>
    number.addEventListener("click", function (event) {
      const singleButton = event.target;
      btnValue = singleButton.textContent;
      const displayValue = Number(display.textContent);
      displayNumber(displayValue);
    })
  );
}
getNumberValue();

function getOperator() {
  btnOperations.forEach((operator) =>
    operator.addEventListener("click", function (event) {
      const operatorButton = event.target;
      operatorValue = operatorButton.textContent;
      return operatorValue;
    })
  );
}
getOperator();

function displayNumber(num) {
  if (num === 0) {
    display.textContent = btnValue;
  } else {
    display.textContent = num + btnValue;
  }
}
