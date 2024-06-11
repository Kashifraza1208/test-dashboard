import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";

import HomeChartSection from "../components/HomeChartSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <p className="text-black px-12 font-semibold text-xl pt-5">
        Welcome, John Pual
      </p>
      <HomeChartSection />
      <HomeSection />
    </div>
  );
};

export default Home;
