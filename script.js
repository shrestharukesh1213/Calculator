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
// let firstNumber, secondNumber, operator;

const operate = (firstNum, secondNum, op) => {
  if (op === "add") return add(firstNum, secondNum);
  else if (op === "subtract") return subtract(firstNum, secondNum);
  else if (op === "multiply") return multiply(firstNum, secondNum);
  else if (op === "divide") return divide(firstNum, secondNum);
};
// const whatToDo = prompt("Enter The operation");
// const num1 = prompt("Enter The number1");
// const num2 = prompt("Enter The number2");
// console.log(operate(Number(num1), Number(num2), whatToDo));
