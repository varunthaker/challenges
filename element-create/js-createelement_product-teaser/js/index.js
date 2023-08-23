console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const mainContainer = document.querySelector("body");

//product container

const productElement = document.createElement("article");
productElement.classList.add("product");
mainContainer.append(productElement);

//product body
const productBodyElement = document.createElement("div");
productBodyElement.classList.add("product__body");
productElement.append(productBodyElement);

//image div

const productImageElement = document.createElement("div");
productImageElement.classList.add("product__image-container");
productBodyElement.append(productImageElement);

//img
const imageElement = document.createElement("img");
imageElement.classList.add("product__image");
imageElement.setAttribute("href", imageSrc);
imageElement.setAttribute("alt", "");
productImageElement.append(imageElement);

//text-container
const productTextContainer = document.createElement("div");
productTextContainer.classList.add("product__text-container");
productBodyElement.append(productTextContainer);

const productTextContainerHead = document.createElement("h1");
productTextContainerHead.classList.add("product__name");
productTextContainerHead.textContent = "My Fav Product";
productTextContainer.append(productTextContainerHead);

const productTextContainerDesc = document.createElement("p");
productTextContainerDesc.classList.add("product__description");
productTextContainerDesc.textContent = "lo chiudvh bhzierf hf rehio jfoi hioer";
productTextContainer.append(productTextContainerDesc);

//footer
const footerElement = document.createElement("footer");
footerElement.classList.add("product__footer");
productElement.append(footerElement);

const spanElement = document.createElement("span");
spanElement.classList.add("product__price");
spanElement.textContent = "50 €";
footerElement.append(spanElement);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("product__buy-button");
button.textContent = "Buy";
button.setAttribute("data-js", "consoleit");
footerElement.append(button);

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`Product Price is: ${spanElement.textContent}`);
  console.log(`Products Name is: ${productTextContainerHead.textContent}`);
});
