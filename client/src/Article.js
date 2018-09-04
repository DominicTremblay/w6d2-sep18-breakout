import React from "react";
import "./Article.css";
const Article = props => {
  const {
    user: {
      avatars: { small },
      name,
      handle
    },
    content: { text },
    date
  } = props;

  return (
    <article>
      <header>
        <img src={small} alt="avatar" />
        <div className="name">{name}</div>
        <div className="handle">{handle}</div>
      </header>
      <p className="tweet-content">{text}</p>
      <footer>
        <div className="date">{date}</div>
        <div className="icons">
          <i className="fas fa-flag" />
          <i className="fas fa-retweet" />
          <i className="fas fa-heart" />
        </div>
      </footer>
    </article>
  );
};
export default Article;
