import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Featured />
        <h1>Browse by property</h1>
        <PropertyList />
        <h1>Home guests love</h1>

        <FeaturedProperties />
        <MailList />
      </div>
      <footer>
        <Featured />
      </footer>
    </div>
  );
};

export default Home;
