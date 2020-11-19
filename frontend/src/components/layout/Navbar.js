import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        <img className="logo" src={logo} alt="Blue logo with words FoodFeed" />
      </a>

      <div className="nav-item">
        <Link to="/forum" className="nav-link">
          Go To Forum
        </Link>
      </div>

      <button className="btn btn-light logout" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
