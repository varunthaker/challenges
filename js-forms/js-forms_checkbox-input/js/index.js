console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  const formData = new FormData(event.target);
  const formKeyValue = Object.fromEntries(formData);

  if (formKeyValue.tos === "on") {
    hideTosError();
    alert("Form submitted");
  } else {
    showTosError();
  }

  // eslint-disable-next-line no-alert
});
