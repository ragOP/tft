import React from "react";
import "./diversity.css";
import slider from '../Assets/Images/sliderimage.png'
import redsmall from '../Assets/Images/redsmall.svg'
const Diversity = () => {
  return (
    <div className="containermain">
      <p className="title">Diversity & inclusion</p>
      <img src={slider} alt="s" className="slider" />
      <div className="lines">
      <p className="work">Our work is a <b>story of purpose</b></p>
      <p className="para">Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints.</p>
      <img src={redsmall} alt="s" className="redsmallredsmall" />
      <p className="full">Read full story</p>
      </div>

    </div>
  );
};

export default Diversity;
