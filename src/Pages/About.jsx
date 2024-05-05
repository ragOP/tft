import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import MissionAbout from "../Component/MissionAbout";
import Diversity from "../Component/Diversity";
import Leadership from "../Component/Leadership";
import Brands from "../Component/Brands";
const About = () => {
  return (
    <>
      <Navbar />
      <MissionAbout />
      <Diversity
        title="Our Stories"
        heading="My work is a story of"
        hedingSpan="problem 
        solving."
        desc="Born almost three months premature, I grew up passionate about healthcare and cutting-edge technologies to create better health outcomes. My attraction to Thermo Fisher Scientific was simple: the chance to make a positive impact through problem solving."
        sliderr={false}
      />
      <Leadership />
      <Brands />
      <Footer />
    </>
  );
};

export default About;
