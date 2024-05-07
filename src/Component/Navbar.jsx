import React from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import search from "../Assets/Images/Search.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDropdown }) => {
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
            <Link onClick={() => toggleDropdown("About")}>
              <li>ABOUT</li>
            </Link>
            <Link onClick={() => toggleDropdown("CSR")}>
              <li>CORPORATE SOCIAL RESPONSIBILITY</li>
            </Link>
            <Link onClick={() => toggleDropdown("Investor")}>
              <li>INVESTOR</li>
            </Link>
            <Link onClick={() => toggleDropdown("Newsroom")}>
              <li>NEWSROOM</li>
            </Link>
            <Link onClick={() => toggleDropdown("Career")}>
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
