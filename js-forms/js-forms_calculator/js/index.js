console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result = 0;

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const num1 = Number(data.numberA);
  const num2 = Number(data.numberB);

  let selectedOperator = data.operator;

  switch (selectedOperator) {
    case "addition":
      result = add(num1, num2);
      break;
    case "subtraction":
      result = subtract(num1, num2);
      break;
    case "multiplication":
      result = multiply(num1, num2);
      break;
    case "division":
      result = divide(num1, num2);
      break;
    default:
      result = "Please enter valid inputs";
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
