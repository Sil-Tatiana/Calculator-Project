// select all the buttons/text outputs
const allButtons = document.querySelector(".keys-btn");
const btnNumbers = document.getElementsByClassName("num-btn");
const btnOperations = document.getElementsByClassName("btn-operation");
const btnEquals = document.getElementsByClassName("btn-equals");
const btnClear = document.getElementsByClassName("btn-clear");
const btnDot = document.getElementsByClassName("btn-dot");
const display = document.querySelector(".display");

allButtons.addEventListener("click", (event) => {
  const singleBtn = event.target;
  // console.log(singleBtn);
  const btnValue = singleBtn.textContent;
  const displayValue = display.textContent;

  if (displayValue === "0") {
    display.textContent = btnValue;
  } else {
    display.textContent = displayValue + btnValue;
  }
});
// create an add function
// create an subtraction function
// create an division function
// create an multiplication function
//create a delete action
