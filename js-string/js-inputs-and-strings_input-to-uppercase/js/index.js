console.clear();

const inputElement = document.querySelector("[data-js=first-input]");
const button = document.querySelector("[data-js=button-uppercase]");
const output = document.getElementById("help-text");

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element */

button.addEventListener("click", () => {
  const input = inputElement.value;
  const upperCase = input.toUpperCase();

  output.innerText = `Your upperCase String is ${upperCase}`;
});
