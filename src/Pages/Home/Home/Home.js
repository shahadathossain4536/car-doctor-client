import React from "react";
import About_us from "../About_us/About_us";

import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About_us />
      <Service />
      <Contacts />
      <Products />
      <Team />
    </div>
  );
};

export default Home;
