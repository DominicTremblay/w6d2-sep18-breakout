import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";
import AllTweets from "./AllTweets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/tweets")
      .then(response => response.json())
      .then(tweets => this.setState({ tweets: tweets }));
  }

  postTweet = content => {
    console.log({ content });
    fetch("http://localhost:8080/tweets", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ text: content })
    })
      .then(response => response.json())
      .then(tweet => this.setState({ tweets: [tweet, ...this.state.tweets] }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <main className="mcontainer">
          <NewTweet postTweet={this.postTweet} />
          <AllTweets tweets={this.state.tweets} />
        </main>
      </div>
    );
  }
}

export default App;
