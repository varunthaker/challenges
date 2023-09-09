console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const language in languages) {
  const optionElement = document.createElement("option");
  optionElement.setAttribute("value", language);
  optionElement.textContent = language;
  select.append(optionElement);
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const navElement in nav) {
  console.log(nav[navElement]);

  const listeItem = document.createElement("li");
  listeItem.setAttribute("href", nav[navElement].href);
  listeItem.textContent = nav[navElement].text;
  ul.append(listeItem);
}
