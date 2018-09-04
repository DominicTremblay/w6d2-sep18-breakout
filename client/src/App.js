import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";
import AllTweets from "./AllTweets";

class App extends Component {
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
