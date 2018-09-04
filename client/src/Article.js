import React from "react";
import "./Article.css";

const Article = props => (
  <article>
    <header>
      <img
        src="https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png"
        alt="avatar"
      />
      <div className="name">Johann von Goethe</div>
      <div className="handle">@johann49</div>
    </header>
    <p className="tweet-content">
      Es ist nichts schrecklicher als eine tätige Unwissenheit.
    </p>
    <footer>
      <div className="date" />
      <div className="icons">
        <i className="fas fa-flag" />
        <i className="fas fa-retweet" />
        <i className="fas fa-heart" />
      </div>
    </footer>
  </article>
);

export default Article;
