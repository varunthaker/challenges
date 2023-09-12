import React from "react";
import "./styles.css";
import Button from "./Button";

export default function App() {
  function handleClick() {
    alert("You clicked Me!");
  }
  return (
    <Button
      color="green"
      disabled={false}
      text="Submit"
      onClick={handleClick}
    />
  );
}
