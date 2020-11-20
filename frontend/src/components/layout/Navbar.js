import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        <img className="logo" src={logo} alt="Blue logo with words FoodFeed" />
      </a>

      

      <button className="btn btn-light logout" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
