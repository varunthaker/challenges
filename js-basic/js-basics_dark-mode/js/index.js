console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

// console.dir(darkMode);
// console.dir(lightMode);
// console.dir(toggleMode);

darkMode.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
});

lightMode.addEventListener("click", () => {
  bodyElement.classList.add("button--light");
});

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("button--toggle");
});
