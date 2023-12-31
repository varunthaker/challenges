console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const programmingLanguage of programmingLanguages) {
  const liElement = document.createElement("li");
  liElement.innerText = programmingLanguage;
  ol.append(liElement);
}
