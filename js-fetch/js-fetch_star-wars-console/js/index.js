console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Invalid API");
    } else {
      const data = await response.json();

      const R2Object = data["results"].filter(
        (element) => element["name"] === "R2-D2"
      );

      console.log("eyeColor is ", R2Object[0]["eye_color"]);
    }
  } catch (err) {
    console.error("Bad  Request");
  }
}

fetchData();
