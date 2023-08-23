console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//main container
const mainContainer = document.querySelector("body");

//Card Element with class
const cardElement = document.createElement("article");
cardElement.classList.add("post");

const postContentElement = document.createElement("p");
postContentElement.classList.add("post__content");
postContentElement.textContent = "How are you doing.I am good";
cardElement.append(postContentElement);

const createFooter = () => {
  const footer = document.createElement("footer");

  //user Name element
  const userNameElement = document.createElement("span");
  userNameElement.classList.add("post__username");
  userNameElement.textContent = "@varunthaker";
  footer.append(userNameElement);

  //button element
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("type", "button");
  buttonElement.setAttribute("data-js", "like-button");
  buttonElement.classList.add("post__button");
  buttonElement.textContent = "♥ Like";
  buttonElement.addEventListener("click", handleLikeButtonClick);

  footer.append(buttonElement);

  return footer;
};

const footerElement = createFooter();
footerElement.classList.add("post__footer");

cardElement.append(footerElement);

mainContainer.append(cardElement);
