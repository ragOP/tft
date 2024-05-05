import React from "react";
import founder from "../Assets/Images/founder.svg";
import profile1 from "../Assets/Images/Leader (1).svg";
import profile2 from "../Assets/Images/Leader (2).svg";
import profile3 from "../Assets/Images/Leader (3).svg";
import profile4 from "../Assets/Images/Leader (4).svg";
import profile5 from "../Assets/Images/Leader (5).svg";
import profile6 from "../Assets/Images/Leader (6).svg";
import profile7 from "../Assets/Images/Leader (7).svg";
import profile8 from "../Assets/Images/Leader (8).svg";
import "./leadership.css";

const Leadership = () => {
  return (
    <div className="leadership">
      <p className="leadership-heading">LEADERSHIP</p>
      <div className="leadership-main">
        <div className="leaderhsip-left">
          <img src={founder} alt="" />
        </div>
        <div className="leadership-right">
          <div className="leadership-right-top">MESSAGE FROM CEO</div>
          <div className="leadership-description">
            “ The reason we responded so quickly to the pandemic was the amazing
            team we have. 90,000 colleagues around the world dedicated to our
            customers’ success.”
          </div>
          <div className="leadership-bottom">READ COMPLETE LETTER</div>
        </div>
      </div>
      <div className="bottom-title">
        Our <span>leadership team</span>
      </div>
      <div className="leadership-images">
        <img src={profile1} alt="" />
        <img src={profile2} alt="" />
        <img src={profile3} alt="" />
        <img src={profile4} alt="" />
        <img src={profile5} alt="" />
        <img src={profile6} alt="" />
        <img src={profile7} alt="" />
        <img src={profile8} alt="" />
      </div>
    </div>
  );
};

export default Leadership;
