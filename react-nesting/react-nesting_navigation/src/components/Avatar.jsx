import React from "react";
import avatar from "../img/avatar.jpg";

const Avatar = () => {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>
    </>
  );
};

export default Avatar;
