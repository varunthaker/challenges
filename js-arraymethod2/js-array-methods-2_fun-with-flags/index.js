import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  //task1
  // const foundCountry = countries.find((country) =>
  //   country.name.startsWith(searchString)
  // );

  const foundCountries = countries.filter((country) =>
    country.name.startsWith(searchString)
  );

  if (foundCountries) {
    foundCountries.forEach((foundCountry) => {
      const countryElement = Country(foundCountry);
      container.append(countryElement);
    });
  }
});
