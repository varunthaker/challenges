import React from "react";

const Article = () => {
  return (
      <article className="article">
        <h2 className="article__title">Article Title:</h2>
        <label htmlFor="input">Some label</label>
        <input type="text" id="input" name="input" />
        <a className="article__link" href="#">
          Link
        </a>
      </article>
  );
};

export default Article;
