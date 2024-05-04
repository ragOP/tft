import React from "react";
import "./diversity.css";
import main from "../Assets/Images/diversity.svg";
import first from "../Assets/Images/Rectangle 19922.svg";
import second from "../Assets/Images/Rectangle 19923.svg";
import third from "../Assets/Images/Rectangle 19924.svg";
import dot from "../Assets/Images/redsmall.svg";
import slider from "../Assets/Images/Group 162.svg";

const Diversity = () => {
  return (
    <div className="containermain">
      <p className="title">Diversity & inclusion</p>
      <div className="diversity-main">
        <div className="diversity-img">
          <img src={main} alt="" />
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
        </div>
        <div className="diversity-text">
          <p className="diversity-title">
            Our work is a <span>story of purpose</span>
          </p>
          <p className="diversity-desc">
            Our commitment to fostering a culture that values diversity and
            inclusion (D&I) considers gender and ethnicity diversity as well as
            diversity of backgrounds, experiences and viewpoints.
          </p>
          <div className="button-mission">
            <img src={dot} alt="" />
            <p
              className="button-text"
              style={{ cursor: "pointer", textTransform: "capitalize" }}
            >
              Read Full Story
            </p>
          </div>
          <img className="img-slider" src={slider} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Diversity;
