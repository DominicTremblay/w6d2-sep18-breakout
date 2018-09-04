import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import NewTweet from "./NewTweet";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main class="mcontainer">
          <NewTweet />
          <section id="tweet-container" />
        </main>
      </div>
    );
  }
}

export default App;
