import React from "react";
import "./dropdown.css";
import left from "../Assets/Images/ss.svg";
import right from "../Assets/Images/Vector (4).svg";
import top from "../Assets/Images/dropd.svg";
import down from "../Assets/Images/dropa.svg";
import icon from "../Assets/Images/icon.png";

const Dropdown = () => {
  return (
    <div class="dropdown">
      <div className="dropdown-left">
        <div className="dropdown-left-img">
          <img src={left} alt="" />
        </div>
        <div className="dropdown-left-top">
          <img src={down} alt="" />
          <p className="dropdown-top-text">Our Mission</p>
        </div>
        <p className="dropdown-left-mid">
          Everything we do starts with our Mission: to <br /> enable our
          customers to make the world <br />
          <span>healthier, cleaner, and safer.</span>
        </p>
        <div className="dropdown-left-bottom">
          <img src={top} alt="" />
          <p className="bottom-text">Read More</p>
        </div>
      </div>
      <div className="dropdown-mid">
        <div className="dropdown-header">
          <img src={icon} alt="" />
          <p className="heder-drop">Our Company</p>
        </div>
        <div className="dropdown-header">
          <img src={icon} alt="" />
          <p className="heder-drop">Our Stories</p>
        </div>
        <div className="dropdown-header">
          <img src={icon} alt="" />
          <p className="heder-drop">Information Security</p>
        </div>
        <div className="dropdown-header">
          <img src={icon} alt="" />
          <p className="heder-drop">Supplier Resources</p>
        </div>
      </div>
      <div className="dropdown-right">
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Dropdown;
