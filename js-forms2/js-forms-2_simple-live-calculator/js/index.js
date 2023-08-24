console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("change", (event) => {
  event.preventDefault();
  firstInput.value = event.target.value;
  let output = multiplication(firstInput.value, secondInput.value);
  result.textContent = output;
});

secondInput.addEventListener("change", (event) => {
  event.preventDefault();
  secondInput.value = event.target.value;
  let output = multiplication(firstInput.value, secondInput.value);
  result.textContent = output;
});

const multiplication = (num1, num2) => {
  return num1 * num2;
};
