console.clear();

const currentYearElement = document.querySelector('[data-js="year"]');
const seeMoreButton = document.querySelector('[data-js="see-more"]');
const hiddenProjectCards = document.querySelectorAll(
  '[data-js="hidden-element"]'
);

const bodyElement = document.querySelector("body");

//Get Present Year for Footer
const currentYear = new Date().getFullYear();
currentYearElement.innerText = currentYear;

//Show all projects
seeMoreButton.addEventListener("click", () => {
  if (seeMoreButton.innerText === "Show More") {
    Array.from(hiddenProjectCards).map((projectCard) =>
      projectCard.classList.remove("hidden")
    );
    seeMoreButton.innerText = "Show Less";
  } else if (seeMoreButton.innerText === "Show Less") {
    Array.from(hiddenProjectCards).map((projectCard) =>
      projectCard.classList.add("hidden")
    );
    seeMoreButton.innerText = "Show More";
  }
});

const toggleButton = document.querySelector('[data-js="toggle-switch"]');
const toggleIcon = document.getElementById("theme");

toggleButton.addEventListener("click", () => {
  if (toggleIcon.classList[2] === "fa-moon") {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
    bodyElement.classList.add("light-mode");
  } else if (toggleIcon.classList[2] === "fa-sun") {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
    bodyElement.classList.remove("light-mode");
  } else {
    return null;
  }
});
