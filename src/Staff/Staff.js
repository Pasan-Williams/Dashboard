import React, { useState } from "react";
import "./Staff.css";
import "../Dashboard/Dashboard.css";
import { Card } from "react-bootstrap";
import DashHeader from "../Dashboard/DashHeader";
// import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import CustomButton from "../Custom/CustomButton/CustomButton";
import { Tasks } from "./Tasks";
import { Link } from "react-router-dom";

export default function Staff({ title }) {
  const onClick = () => {
    console.log("Custom button click");

  }
  const onDeleteDetails = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Sanoj",
      date: "1996/02/20",
      description: "UI Engineer",
    },
    {
      id: 2,
      name: "Sasanka",
      date: "1995/05/28",
      description: "Software Engineer",
    },
    {
      id: 3,
      name: "Kusal",
      date: "1994/04/26",
      description: "Tech Lead",
    },
  ]);
  return (
    <div className="dash-background">
      <DashHeader />
      <Card className="card-style mt-3 card-height">
        <Card.Header as="h6">{title}</Card.Header>
        <Card.Body>
          <Link to="/AddForm" style={{ textDecoration: 'none'}}>
          <CustomButton size="sm" className="mb-3" text="Add" color="black" onClick={onClick}/>{" "}
          </Link>
          <CustomButton size="sm" className="mb-3" text="Edit" color="black" onClick={onClick}/>{" "}
          {/* <CustomButton size="sm" className="mb-3" text="Delete" color="red" onClick={onClick}/>{" "} */}
          <Tasks tasks={tasks} onDelete={onDeleteDetails} />
        </Card.Body>
      </Card>
    </div>
  );
}
Staff.defaultProps = {
  title: "Staff Details",
};
Staff.propTypes = {
  title: PropTypes.string.isRequired,
};
