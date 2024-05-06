import React from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import search from "../Assets/Images/Search.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDropdown }) => {
  return (
    <div className="navbar">
      <Link to="/" onClick={toggleDropdown}>
        <div className="navlogo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="menulinks">
        <div className="menu">
          <ul>
            <Link onClick={toggleDropdown}>
              <li>ABOUT</li>
            </Link>
            <Link to="/csr" onClick={toggleDropdown}>
              <li>CORPORATE SOCIAL RESPONSIBILITY</li>
            </Link>
            <Link to="/investor" onClick={toggleDropdown}>
              <li>INVESTOR</li>
            </Link>
            <Link to="/newsroom" onClick={toggleDropdown}>
              <li>NEWSROOM</li>
            </Link>
            <Link to="/career" onClick={toggleDropdown}>
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
