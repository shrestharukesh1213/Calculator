const add = (...num) => {
  return num.reduce((total, currentNum) => total + currentNum);
};
const subtract = (...num) => {
  return num.reduce((total, currentNum) => total - currentNum);
};
const multiply = (...num) => {
  return num.reduce((total, currentNum) => total * currentNum);
};
const divide = (...num) => {
  return num.reduce((total, currentNum) => total / currentNum);
};
let firstNumber, secondNumber, operator;

const operate = (firstNum, secondNum, op) => {
  if (op === "add") return add(firstNum, secondNum);
  else if (op === "subtract") return subtract(firstNum, secondNum);
  else if (op === "multiply") return multiply(firstNum, secondNum);
  else if (op === "divide") return divide(firstNum, secondNum);
};
const ongoingNumberOperations = document.querySelector(".num");
const result = document.querySelector(".result");
// const displaying =
const numZero = document.getElementById("zero");
numZero.addEventListener("click", () => {
  firstNumber = 0;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numOne = document.getElementById("one");
numOne.addEventListener("click", () => {
  firstNumber = 1;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numTwo = document.getElementById("two");
numTwo.addEventListener("click", () => {
  firstNumber = 2;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numThree = document.getElementById("three");
numThree.addEventListener("click", () => {
  firstNumber = 3;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numFour = document.getElementById("four");
numFour.addEventListener("click", () => {
  firstNumber = 4;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numFive = document.getElementById("five");
numFive.addEventListener("click", () => {
  firstNumber = 5;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numSix = document.getElementById("six");
numSix.addEventListener("click", () => {
  firstNumber = 6;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numSeven = document.getElementById("seven");
numSeven.addEventListener("click", () => {
  firstNumber = 7;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numEight = document.getElementById("eight");
numEight.addEventListener("click", () => {
  firstNumber = 8;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const numNine = document.getElementById("nine");
numNine.addEventListener("click", () => {
  firstNumber = 9;
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const opPlus = document.getElementById("plus");
opPlus.addEventListener("click", () => {
  operator = "+";
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const opMinus = document.getElementById("minus");
opMinus.addEventListener("click", () => {
  operator = "-";
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const opMultiply = document.getElementById("multiply");
opMultiply.addEventListener("click", () => {
  operator = "x";
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
const opDivide = document.getElementById("divide");
opDivide.addEventListener("click", () => {
  operator = "/";
  ongoingNumberOperations.innerHTML = `${firstNumber}`;
});
// const whatToDo = prompt("Enter The operation");
// const num1 = prompt("Enter The number1");
// const num2 = prompt("Enter The number2");
// console.log(operate(Number(num1), Number(num2), whatToDo));
