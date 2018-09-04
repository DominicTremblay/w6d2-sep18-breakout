import React from "react";

const NewTweet = props => (
  <section className="new-tweet">
    <h2>Compose Tweet</h2>

    <ul className="errors" />

    <form method="post" action="/tweets">
      <textarea name="text" placeholder="What are you humming about?" />
      <input type="submit" value="Tweet" />
      <span className="counter">140</span>
    </form>
  </section>
);

export default NewTweet;
