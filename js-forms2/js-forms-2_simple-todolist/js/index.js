console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const title = data.headline;
  const content = data.task;

  const liItem = listItemAddition(title, content);
  todoList.append(liItem);

  resetForm();
});

const listItemAddition = (title, content) => {
  const liElement = document.createElement("li");

  const headerElement = document.createElement("h3");
  headerElement.textContent = title;
  liElement.append(headerElement);

  const contentElement = document.createElement("p");
  contentElement.textContent = content;
  liElement.append(contentElement);

  return liElement;
};

const resetForm = () => {
  form.elements.headline.focus();
  form.reset();
};
