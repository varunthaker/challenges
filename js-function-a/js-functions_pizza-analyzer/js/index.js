console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let dia1 = pizzaInput1.value;
let dia2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", (pizzaInput) => {
  // write your code here
  dia1 = pizzaInput.target.value;
  calculatePizzaGain(dia1, dia2);
  updatePizzaDisplay(pizza1, dia1);
  updateOutputColor(dia1, dia2);
});

pizzaInput2.addEventListener("input", (pizzaInput) => {
  // write your code here
  dia2 = pizzaInput.target.value;
  calculatePizzaGain(dia1, dia2);
  updatePizzaDisplay(pizza2, dia2);

  updateOutputColor(dia1, dia2);
});

// Task 1
// define the function calculatePizzaGain here

const pi = Math.PI;

calculatePizzaGain = (dia1, dia2) => {
  let area1 = pi * (dia1 / 2) ** 2;
  let area2 = pi * (dia2 / 2) ** 2;

  let pizzaGain = Math.round(((area2 - area1) / area1) * 100);

  output.innerText = pizzaGain;
};

// Task 2
// define the function updatePizzaDisplay here

updatePizzaDisplay = (pizza, dia) => {
  let newDisplaySize = (dia / 24) * 100;
  pizza.style.width = newDisplaySize + "px";
};

// Task 3
// define the function updateOutputColor here

updateOutputColor = (size1, size2) => {
  console.log(size1, size2);
  outputSection.style.backgroundColor =
    size2 >= size1 ? "var(--green)" : "var(--red)";
};
