import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable

  const [isFavorite, setisFavorite] = useState(true);

  function handleOnClick() {
    setisFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleOnClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
