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
    fetch("/tweets")
      .then(response => response.json())
      .then(tweets => this.setState({ tweets: tweets }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <main className="mcontainer">
          <NewTweet />
          <AllTweets />
        </main>
      </div>
    );
  }
}

export default App;
