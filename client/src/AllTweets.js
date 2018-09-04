import React from "react";
import Article from "./Article";

const AllTweets = props => {
  const { tweets } = props;

  const tweetArticles = tweets.map(tweet => (
    <Article
      key={tweet._id}
      content={tweet.content}
      user={tweet.user}
      date={tweet.created_at}
    />
  ));

  return <section id="tweet-container">{tweetArticles}</section>;
};

export default AllTweets;
