import React from "react";

const Button = ({ color, disabled, text, onClick }) => {
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
