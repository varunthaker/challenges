import React from "react";
import logo from "../img/logo.jpg";

const Logo = () => {
  return (
    <>
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
    </>
  );
};

export default Logo;
