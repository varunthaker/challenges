console.clear();

import { circle } from "./components/Circle/circle.js";
import { square } from "./components/Square/square.js";
import { pentagon } from "./components/Pentagon/pentagon.js";
const root = document.getElementById("root");

root.append(circle, square, pentagon);
