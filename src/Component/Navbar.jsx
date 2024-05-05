import React from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import search from "../Assets/Images/Search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navlogo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="menulinks">
        <div className="menu">
          <ul>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
            <Link to="/csr">
              <li>CORPORATE SOCIAL RESPONSIBILITY</li>
            </Link>
            <Link to="/investor">
              <li>INVESTOR</li>
            </Link>
            <Link to="/newsroom">
              <li>NEWSROOM</li>
            </Link>
            <Link to="/career">
              <li>CAREER</li>
            </Link>
          </ul>
        </div>
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
        <button className="button">Thermofisher.com</button>
      </div>
    </div>
  );
};

export default Navbar;
