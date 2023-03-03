import React from "react";
import {
  Featured,
  FeaturedProperties,
  Footer,
  Hero,
  MailList,
  Navbar,
  PropertyList,
} from "../components/Index";
import { hero, navlinks } from "../data/booking";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <div>
        <Featured />
        <h1>Browse by property</h1>
        <PropertyList />
        <h1>Home guests love</h1>

        <FeaturedProperties />
        <MailList />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
