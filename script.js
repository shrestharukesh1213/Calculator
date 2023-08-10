const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equals = document.querySelector("[data-equalsTo]");
const currentDisplay = document.querySelector(".num");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
let num1, num2, operator;
currentDisplay.textContent = "";
result.textContent = 0;
num1 = "";
num2 = "";
operator = "";
clearButton.addEventListener("click", () => {
  currentDisplay.textContent = "";
  result.textContent = 0;
  num1 = "";
  num2 = "";
  operator = "";
});

const add = (a, b) => {
  return +a + +b;
};
const subtract = (a, b) => {
  return +a - +b;
};
const multiply = (a, b) => {
  return +a * +b;
};
const divide = (a, b) => {
  return +a / +b;
};

const operate = () => {
  if (operator === "+") {
    result.textContent = add(num1, num2);
    num1 = add(num1, num2);
    num2 = "";
  } else if (operator === "-") {
    result.textContent = subtract(num1, num2);
    num1 = subtract(num1, num2);
    num2 = "";
  } else if (operator === "x") {
    result.textContent = multiply(num1, num2);
    if (result.textContent !== "0") {
      num1 = multiply(num1, num2);
      num2 = "";
    }
  } else if (operator === "/") {
    result.textContent = divide(num1, num2);
    if (result.textContent !== "0" && result.textContent !== "Infinity") {
      num1 = divide(num1, num2);
      num2 = "";
    }
  }
};

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    // currentDisplay.textContent += item.textContent;
    if (!num1 || operator == "") {
      num1 += item.textContent;
    } else if (operator) {
      num2 += item.textContent;
    }
    currentDisplay.textContent = `${num1}${operator}${num2}`;
  });
});

operators.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent == "+") {
      if (operator) {
        operate(num1, num2, operator);
      }
      operator = "+";
      operate(num1, num2, "+");
    } else if (item.textContent == "-") {
      if (operator) {
        operate(num1, num2, operator);
      }
      operator = "-";
      operate(num1, num2, "-");
    } else if (item.textContent == "x") {
      if (operator) {
        operate(num1, num2, operator);
      }
      operator = "x";
      operate(num1, num2, "x");
    } else if (item.textContent == "/") {
      if (operator) {
        operate(num1, num2, operator);
      }
      operator = "/";
      operate(num1, num2, "/");
    }
    currentDisplay.textContent = `${num1}${operator}${num2}`;
  });
});

equals.addEventListener("click", () => {
  operate(num1, num2, operator);
  currentDisplay.textContent = `${num1}${operator}${num2}`;
});

deleteButton.addEventListener("click", () => {
  let length = currentDisplay.textContent.length;
  currentDisplay.textContent = currentDisplay.textContent
    .split("")
    .splice(0, length - 1)
    .toString()
    .replaceAll(",", "");
  console.log(currentDisplay.textContent);
});
