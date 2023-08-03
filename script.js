const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const currentDisplay = document.querySelector(".num");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let num1, num2, operator;

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    currentDisplay.textContent += item.textContent;
  });
});
operators.forEach((item) => {
  item.addEventListener("click", () => {
    currentDisplay.textContent += item.textContent;
  });
});

clearButton.addEventListener("click", () => {
  currentDisplay.textContent = "";
  result.textContent = 0;
});
deleteButton.addEventListener("click", () => {
  let length = currentDisplay.textContent.length;
  currentDisplay.textContent = currentDisplay.textContent
    .split("")
    .splice(0, length - 1)
    .toString()
    .replaceAll(",", "");
});
