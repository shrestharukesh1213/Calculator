const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
console.log(operators);
const equals = document.querySelector("[data-equalsTo]");
const currentDisplay = document.querySelector(".num");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let num1, num2, operator;
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    currentDisplay.textContent += item.textContent;
    if (!num1) {
      num1 = parseInt(item.textContent);
    } else {
      num2 = parseInt(item.textContent);
    }
  });
});

operators.forEach((item) => {
  item.addEventListener("click", () => {
    currentDisplay.textContent += item.textContent;
    operator = item.textContent;
  });
});

clearButton.addEventListener("click", () => {
  currentDisplay.textContent = "";
  result.textContent = 0;
  num1 = "";
  num2 = "";
  operator = "";
});

deleteButton.addEventListener("click", () => {
  let length = currentDisplay.textContent.length;
  currentDisplay.textContent = currentDisplay.textContent
    .split("")
    .splice(0, length - 1)
    .toString()
    .replaceAll(",", "");
});

const operate = () => {
  if (operator === "+") {
    result.textContent = add(num1, num2);
  } else if (operator === "-") {
    result.textContent = subtract(num1, num2);
  } else if (operator === "x") {
    result.textContent = multiply(num1, num2);
  } else if (operator === "/") {
    result.textContent = divide(num1, num2);
  }
};
equals.addEventListener("click", () => {
  operate();
});
