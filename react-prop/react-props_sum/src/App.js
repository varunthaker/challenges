import React from "react";
import "./styles.css";

export default function App() {
  return <Sum num1={2} num2={5} />;
}

function Sum({ num1, num2 }) {
  return <h1>The Sum is {num1 + num2}</h1>;
}
