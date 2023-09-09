console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStar) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  //--^-- your code here --^--

  for (let i = 1; i <= 5; i++) {
    const imgElement = document.createElement("img");
    if (i <= filledStar) {
      imgElement.setAttribute("src", "./assets/star-filled.svg");
    } else {
      imgElement.setAttribute("src", "./assets/star-empty.svg");
    }
    imgElement.addEventListener("click", () => renderStars(i));
    starContainer.append(imgElement);
  }
}

renderStars(0);
