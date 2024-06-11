import React from "react";
import { Chart } from "react-google-charts";

const TimelineChart = () => {
  const columns = [
    { type: "string", id: "Position" },
    { type: "string", id: "Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [
    ["FD", "Utkarsh FD 1", new Date(2024, 0, 1), new Date(2024, 5, 30)],
    ["FD", "Shriram FD Plan 2", new Date(2024, 0, 1), new Date(2025, 3, 30)],
    ["FD", "Bajaj Finserv FD 1", new Date(2024, 4, 1), new Date(2025, 3, 30)],
    ["FD", "Mahindra FD Plan 2", new Date(2024, 5, 1), new Date(2026, 5, 31)],
  ];

  const data = [columns, ...rows];

  const options = {
    timeline: { showRowLabels: false },
    hAxis: {
      minValue: new Date(2024, 0, 1),
      maxValue: new Date(2026, 11, 31),
    },
    backgroundColor: "#f8f8f8",
    colors: ["#3B39D9", "#3B39D9", "#3B39D9", "#3B39D9"],
  };

  return (
    <div className="bg-white h-64 p-5 w-full  shadow-lg">
      <h3 className="font-semibold mb-4">FD Maturity Timeline</h3>
      <Chart
        chartType="Timeline"
        data={data}
        options={options}
        height="400px"
      />
    </div>
  );
};

export default TimelineChart;
