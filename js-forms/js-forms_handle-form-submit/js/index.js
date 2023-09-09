console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //get the Form Data in nested Array Form
  const formData = new FormData(event.target);

  console.log(formData);

  //converting nested Array into Array with object
  const data = Object.fromEntries(formData);

  console.log(`Your data is ${JSON.stringify(data)}`);
});
