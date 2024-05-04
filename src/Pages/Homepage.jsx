import React from "react";
import Footer from "../Component/Footer";
import Media from "../Component/Media";
import Diversity from "../Component/Diversity";
import Carrer from "../Component/Carrer";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Mission from "../Component/Mission";
import Revenue from "../Component/Revenue";
import Newsroom from "../Component/Newsroom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Revenue />
      <Newsroom />
      {/* <Carrer /> */}
      {/* <Diversity />
      <Media /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
