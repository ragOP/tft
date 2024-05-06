import React, { useState } from "react";
import "./dropdown.css";
import left from "../Assets/Images/ss.svg";
import right from "../Assets/Images/Vector (4).svg";
import top from "../Assets/Images/dropd.svg";
import down from "../Assets/Images/dropa.svg";
import icon from "../Assets/Images/icon.png";

const Dropdown = () => {
  const [companyVisible, setCompanyVisible] = useState(false);
  const [storiesVisible, setStoriesVisible] = useState(false);
  const [securityVisible, setSecurityVisible] = useState(false);
  const [supplierVisible, setSupplierVisible] = useState(false);

  const toggleCompany = () => {
    setCompanyVisible(!companyVisible);
    setStoriesVisible(false);
    setSecurityVisible(false);
    setSupplierVisible(false);
  };

  const toggleStories = () => {
    setStoriesVisible(!storiesVisible);
    setCompanyVisible(false);
    setSecurityVisible(false);
    setSupplierVisible(false);
  };

  const toggleSecurity = () => {
    setSecurityVisible(!securityVisible);
    setCompanyVisible(false);
    setStoriesVisible(false);
    setSupplierVisible(false);
  };

  const toggleSupplier = () => {
    setSupplierVisible(!supplierVisible);
    setCompanyVisible(false);
    setStoriesVisible(false);
    setSecurityVisible(false);
  };

  return (
    <div className="dropdown">
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
        <div className="main-dropdown">
          <div className="dropdown-header" onClick={toggleCompany}>
            <img src={icon} alt="" />
            <p className="heder-drop">Our Company</p>
          </div>
          {companyVisible && (
            <div className="submenu animated">
              <p>Content 1</p>
            </div>
          )}
        </div>
        <div className="main-dropdown">
          <div className="dropdown-header" onClick={toggleStories}>
            <img src={icon} alt="" />
            <p className="heder-drop">Our Stories</p>
          </div>
          {storiesVisible && (
            <div className="submenu animated">
              <p>Content 2</p>
            </div>
          )}
        </div>
        <div className="main-dropdown">
          <div className="dropdown-header" onClick={toggleSecurity}>
            <img src={icon} alt="" />
            <p className="heder-drop">Information Security</p>
          </div>
          {securityVisible && (
            <div className="submenu animated">
              <p>Content 3</p>
            </div>
          )}
        </div>
        <div className="main-dropdown">
          <div className="dropdown-header" onClick={toggleSupplier}>
            <img src={icon} alt="" />
            <p className="heder-drop">Supplier Resources</p>
          </div>
          {supplierVisible && (
            <div className="submenu animated">
              <p>Content 4</p>
            </div>
          )}
        </div>
      </div>
      <div className="dropdown-right">
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Dropdown;
