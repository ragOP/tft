import React from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import search from "../Assets/Images/Search.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlogo">
        <img src={logo} alt="" />
      </div>
      <div className="menulinks">
        <div className="menu">
          <ul>
            <li>ABOUT</li>
            <li>CORPORATE SOCIAL RESPONSIBILITY</li>
            <li>INVESTOR</li>
            <li>NEWSROOM</li>
            <li>CAREER</li>
          </ul>
        </div>
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
        <button className="button">Thermofisher</button>
      </div>
    </div>
  );
};

export default Navbar;
