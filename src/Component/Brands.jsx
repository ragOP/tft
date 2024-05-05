import React from "react";
import "./brands.css";
import one from "../Assets/Images/one.svg";
import two from "../Assets/Images/two.svg";
import three from "../Assets/Images/three.svg";
import four from "../Assets/Images/four.svg";
import five from "../Assets/Images/five.svg";
import six from "../Assets/Images/six.svg";
import seven from "../Assets/Images/seven.svg";
import eight from "../Assets/Images/eight.svg";
import left from "../Assets/Images/Banner1.svg";
import right from "../Assets/Images/Banner2.png";
import logo from "../Assets/Images/Group.svg";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-title">OUR BRANDS</div>
      <div className="brand-banner">
        <div className="banner-left">
          <img src={left} alt="" />
          <img className="banner-left-img" src={logo} alt="" />
        </div>
        <div className="banner-right">
          <img src={right} alt="" />
          <p className="banner-right-text">
            Whether they are improving life for patients, protecting our global
            climate or keeping people safe, our customers look to Thermo Fisher
            Scientific for innovative solutions. Products and services sold
            under the following Thermo Fisher brands enable customers to push
            science and technology a step beyond.
          </p>
        </div>
      </div>
      <div className="banner-logos">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
        <img src={eight} alt="" />
      </div>
    </div>
  );
};

export default Brands;
