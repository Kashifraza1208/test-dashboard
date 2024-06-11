import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const HomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:px-11 gap-5">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default HomeSection;
