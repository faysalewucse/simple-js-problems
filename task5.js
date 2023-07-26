// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, \*, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      break;
  }
}

console.log(calculate(9, 3, "*"));
