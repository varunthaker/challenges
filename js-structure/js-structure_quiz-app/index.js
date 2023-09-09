// Store the cards in a global state

import { App } from "./components/App/app.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
