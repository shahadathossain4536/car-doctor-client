import React from "react";
import About_us from "../About_us/About_us";

import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <About_us />
      <Service />
      <Contacts />
      <Products />
      <Team />
      <Features />
      <Testimonial/>
    </div>
  );
};

export default Home;
