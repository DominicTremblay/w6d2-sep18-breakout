import React from "react";

const NavBar = props => (
  <nav id="nav-bar">
    <img className="logo" src="/images/bird.png" />
    <span className="header">Tweeter</span>

    <a href="#" className="compose-btn">
      <i className="fas fa-edit" /> Compose
    </a>
  </nav>
);

export default NavBar;
