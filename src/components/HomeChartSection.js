import React from "react";

import TimelineChart from "./TimelineChart";
import PieCharts from "./PieCharts";

const HomeChartSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-11 mt-5 gap-5 items-center ">
      <PieCharts />
      <TimelineChart />
    </div>
  );
};

export default HomeChartSection;
