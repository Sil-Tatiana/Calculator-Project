// select all the buttons/text outputs
// const allButtons = document.querySelector(".keys-btn");
const btnNumbers = document.querySelectorAll(".num-btn");
const btnOperations = document.getElementsByClassName("btn-operation");
const btnEquals = document.getElementsByClassName("btn-equals");
const btnClear = document.getElementsByClassName("btn-clear");
const btnDot = document.getElementsByClassName("btn-dot");
const display = document.querySelector(".display");

function getNumberValue() {
  btnNumbers.forEach((number) =>
    number.addEventListener("click", function (event) {
      const singleButton = event.target;
      const btnValue = singleButton.textContent;
      const displayValue = Number(display.textContent);
      if (displayValue === 0) {
        display.textContent = btnValue;
      } else {
        display.textContent = displayValue + btnValue;
      }
    })
  );
}
getNumberValue();
