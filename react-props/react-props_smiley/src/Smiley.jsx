import React from "react";

const Smiley = ({ isSmile }) => {
  return <div>{isSmile ? "😀" : "😔"}</div>;
};

export default Smiley;
