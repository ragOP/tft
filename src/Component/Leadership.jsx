import React from "react";
import founder from "../Assets/Images/founder.svg";
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
    </div>
  );
};

export default Leadership;
