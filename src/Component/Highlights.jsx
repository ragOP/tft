import React from "react";
import "./highlight.css";
import one from "../Assets/Images/high1.svg";

const Highlights = () => {
  return (
    <div className="highlights">
      <p className="highlight-title">HIGHLIGHTS</p>
      <div className="main-highlight">
        <div className="single-highlight">
          <img src={one} alt="" />
          <div className="title-highlight">$1.3 billion</div>
          <p className="desc-highlight">In R&D Investment</p>
        </div>
        <div className="single-highlight">
          <img src={one} alt="" />
          <div className="title-highlight">$1.3 billion</div>
          <p className="desc-highlight">In R&D Investment</p>
        </div>
        <div className="single-highlight">
          <img src={one} alt="" />
          <div className="title-highlight">$1.3 billion</div>
          <p className="desc-highlight">In R&D Investment</p>
        </div>
        <div className="single-highlight">
          <img src={one} alt="" />
          <div className="title-highlight">$1.3 billion</div>
          <p className="desc-highlight">In R&D Investment</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
