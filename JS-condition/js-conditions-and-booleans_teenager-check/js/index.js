const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", (event) => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  // if (age <= 0) {
  //   output.innerText = "Age can not be 0 or Negative";
  // } else if (age > 0 && age <= 18) {
  //   output.innerText = "You are not Adult";
  // } else {
  //   output.innerText = "You are an Adult";
  // }

  //With Ternary Operator
  output.innerText =
    age <= 12 && age < 20 ? "You are an Teen" : "You are NOT teen";
});
