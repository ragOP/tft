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
import Csr from "../Component/Csr";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Csr />
      <Revenue />
      <Newsroom />
      <Carrer />
      <Diversity
        title="DIVERSITY & INCLUSION"
        heading="Our work is a"
        hedingSpan="story of purpose"
        desc="Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints."
        sliderr={true}
      />
      <Media />
      <Footer />
    </>
  );
};

export default Homepage;
