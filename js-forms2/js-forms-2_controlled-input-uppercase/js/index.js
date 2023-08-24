console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const stringToUpperCase = inputValue.toUpperCase();

  input.value = stringToUpperCase;
});
