import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["IT", "HR", "Finance"],
  datasets: [
    {
      data: [100, 50, 150],
      backgroundColor: ["#50FF79", "#3A924F", "#8AFF47"],
      hoverBackgroundColor: ["#50FF00", "#3A9200", "#8AF000"],
    },
  ],
};

export default function PieChart() {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      {/* <h4>Distribution Of Users</h4> */}
      <Pie data={data} />
    </div>
  );
}
