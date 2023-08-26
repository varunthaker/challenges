console.clear();

const toggleButton = document.querySelector('[data-js="toggle-switch"]');
const mainContainer = document.querySelector('[data-js="main-container"]');
const themeContent = document.querySelector("#theme");

console.log(themeContent);
toggleButton.addEventListener("click", () => {
  console.log(themeContent.classList[2]);
  if (themeContent.classList === "fa-moon") {
    console.log("dark mode is active");
  } else {
    themeContent.classList.remove("fa-moon");
    themeContent.classList.add("fa-sun");
    console.log("lightmode is active");
  }
});
