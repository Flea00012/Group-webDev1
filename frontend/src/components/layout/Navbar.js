import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        <img className="logo" src={logo} alt="Blue logo with words FoodFeed" />
      </a>

      <h1>Good Food - Good Mood!</h1>
      <button className="btn btn-dark logout" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
