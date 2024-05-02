/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.css";
import linkedin from '../Assets/Images/linkedin-161-svgrepo-com.svg'
import twitter from '../Assets/Images/pajamas_twitter.svg'
import youtube from '../Assets/Images/youtube-168-svgrepo-com.svg'
import facebook from '../Assets/Images/facebook-176-svgrepo-com.svg'
import insta from '../Assets/Images/instagram-167-svgrepo-com.svg'

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="overlap-group">
          <div class="rectangle"></div>
          <div class="frame">
            <div class="div">
              <div class="text-wrapper">About Thermo Fisher Scientific</div>
              <div class="frame-2">
                <p class="p">
                  Thermo Fisher Scientific Inc. (NYSE: TMO) is the world leader
                  in serving science, with annual revenue over $40 billion. Our
                  Mission is to enable our customers to make the world
                  healthier, cleaner and safer. Whether our customers are
                  accelerating life sciences research, solving complex
                  analytical challenges, increasing productivity in their
                  laboratories, improving patient health through diagnostics or
                  the development and manufacture of life-changing therapies, we
                  are here to support them. Our global team delivers an
                  unrivaled combination of innovative technologies, purchasing
                  convenience and pharmaceutical services through our
                  industry-leading brands, including Thermo Scientific, Applied
                  Biosystems, Invitrogen, Fisher Scientific, Unity Lab Services,
                  Patheon and PPD.
                </p>
                <p class="for-more-information">
                  <span class="span">For more information, please visit </span>
                  <a
                    href="https://www.thermofisher.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="text-wrapper-2">www.thermofisher.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="frame-3">
              <div class="frame-2">
                <p class="div-2">
                  <span class="text-wrapper-3">
                    Company
                    <br />
                  </span>
                  <span class="text-wrapper-4">
                    Sustainability
                    <br />
                    Investors
                    <br />
                    Newsroom
                    <br />
                    Careers
                    <br />
                    About
                    <br />
                    Contact Us
                  </span>
                </p>
              </div>
              <div class="frame-2">
                <p class="div-2">
                  <span class="text-wrapper-3">
                    Brands
                    <br />
                  </span>
                  <span class="text-wrapper-4">
                    Thermo Scientific
                    <br />
                    Applied Biosystems
                    <br />
                    Invitrogen
                    <br />
                    Fisher Scientific
                    <br />
                    Unity Labs Services
                    <br />
                    Patheon
                    <br />
                    PPD
                    <br />
                    Gibco
                  </span>
                </p>
              </div>
              <div class="frame-2">
                <div class="text-wrapper-5">Connect</div>
                <div class="last">
                  <img class="img" src={linkedin}/>
                  <img class="img" src={twitter} />
                  <img class="img" src={youtube}/>
                  <img class="img" src={facebook} />
                  <img class="img" src={insta} />
                </div>
                {/* <img class="img" src="https://c.animaapp.com/4UoIVVjL/img/frame-54-2.svg" /> */}
              </div>
            </div>
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="frame-4">
            <img
              class="logo"
              src="https://c.animaapp.com/4UoIVVjL/img/logo-2.svg"
            />
            <div class="frame-5">
              <p class="text-wrapper-6">
                © Copyright 2006-2023 Thermo Fisher Scientific Inc. All rights
                reserved.
              </p>
              <div class="text-wrapper-6">Terms &amp; Conditions</div>
              <div class="text-wrapper-6">Privacy Information Center</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
