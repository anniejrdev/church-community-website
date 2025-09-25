import React from "react";
import AboutHero from "./AboutHero";
import AboutMinistries from "./AboutMinistries";
import AboutStory from "./AboutStory";
import AboutTestimonials from "./AboutTestimonials";
import About from "./About";

const AboutHome = () => {
  return (
    <div>
      <About />
      <AboutHero />
      <AboutMinistries />
      <AboutStory />
      <AboutTestimonials />
    </div>
  );
};

export default AboutHome;
