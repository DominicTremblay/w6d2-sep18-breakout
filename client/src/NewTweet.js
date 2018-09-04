import React from "react";
import "./NewTweet.css";

const NewTweet = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const tweetContent = event.target.elements.text.value;
    props.postTweet(tweetContent);
  };
  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>

      <ul className="errors" />

      <form onSubmit={handleSubmit}>
        <textarea name="text" placeholder="What are you humming about?" />
        <input type="submit" value="Tweet" />
        <span className="counter">140</span>
      </form>
    </section>
  );
};

export default NewTweet;
