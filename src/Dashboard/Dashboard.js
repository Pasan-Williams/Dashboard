import React from "react";
import "./Dashboard.css";
import DashHeader from "./DashHeader";
import DashBody from "./DashBody";

function Dashboard() {
  return (
    <div className="dash-background">
      <DashHeader />
      <DashBody />
    </div>
  );
}
export default Dashboard;
