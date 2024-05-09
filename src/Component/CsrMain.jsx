import React from "react";
import "./csrmain.css";
import dot from "../Assets/Images/redsmall.svg";
import one from "../Assets/Images/T1.svg";
import two from "../Assets/Images/T2.svg";
import three from "../Assets/Images/T3.svg";
import four from "../Assets/Images/T4.svg";

const CsrMain = () => {
  return (
    <div className="csrr">
      <p className="csrr-title">Corporate Social Responsibility</p>
      <div className="csr-desc">
        <div className="csr-left">
          <p>
            Together we are <br />
            <span>building a brighter future</span>
          </p>
        </div>
        <div className="csr-right">
          <p>
            As the world leader in serving science, we understand that we have a
            unique opportunity and responsibility to use our position to make a
            positive impact on society – not only by enabling our customers’
            success, but also through our actions as a Company to make the world
            a better place.
          </p>
          <div className="csr-btn">
            <img src={dot} alt="" />
            <p>Read more</p>
          </div>
        </div>
      </div>
      <div className="csr-picture">
        <div className="csr-single">
          <img src={one} alt="" />
          <p>Operations</p>
        </div>
        <div className="csr-single">
          <img src={two} alt="" />
          <p>Colleagues</p>
        </div>
        <div className="csr-single">
          <img src={three} alt="" />
          <p>Communities</p>
        </div>
        <div className="csr-single">
          <img src={four} alt="" />
          <p>Environment</p>
        </div>
      </div>
      <div className="csr-commitment">
        <p className="commit-one">OUR CSR COMMITMENT</p>
        <p className="commit-two">
          Our CSR strategy supports our success as we continue to create a great
          place to work for our colleagues, provide high-quality products for
          our customers, deliver strong returns for our shareholders, make a in
          our and reduce our impact on the environment{" "}
        </p>
      </div>
    </div>
  );
};

export default CsrMain;
