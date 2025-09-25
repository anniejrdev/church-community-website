import React from "react";
import Hero from "./Hero";
import Ministries from "./Ministries";
import OrderOfServices from "./OrderOfServices";
import Announcement from "../../components/Announcement";
import WhyChooseUs from "./WhyChooseUs";
import UpcomingEvents from "./UpcomingEvents";
import Contact from "./Contact";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <>
      <Announcement />
      <Hero />
      <Ministries />
      <OrderOfServices />
      <WhyChooseUs />
      <Sponsor />
      <UpcomingEvents />
      <Contact />
    </>
  );
};

export default Home;
