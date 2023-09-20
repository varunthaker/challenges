import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fectAPI() {
      const res = await fetch("http://localhost:3000/name");
      const data = await res.json();

      console.log(data);
    }
    fectAPI();
  });
  return <h1>Hallo</h1>;
}

export default App;
