import React from "react";

const Link = ({ children, refLink }) => {
  return (
    <a className="navigation__link" href={refLink}>
      {children}
    </a>
  );
};

export default Link;
