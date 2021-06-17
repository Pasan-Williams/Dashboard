import React, { useState } from "react";
import "./Staff.css";
import "../Dashboard/Dashboard.css";
import { Card, Modal, Form } from "react-bootstrap";
// import Modal from 'react-bootstrap/Modal'
import DashHeader from "../Dashboard/DashHeader";
// import { FiPlus, FiEdit, FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import CustomButton from "../Custom/CustomButton/CustomButton";
import { Tasks } from "./Tasks";

export default function Staff({ title, onAdd, task }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const AddTask = (task) => {
    const newTask = { id, name, date, description };
    setTasks([...tasks, newTask]);
    handleClose();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ id, name, date, description });
    setId("");
    setName("");
    setDate("");
    setDescription("");
  };

  const DeleteDetails = (id) => {
    console.log(id);
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
          <CustomButton
            size="sm"
            className="mb-3"
            text="Add"
            color="black"
            onClick={handleShow}
          />{" "}
          {/* <CustomButton size="sm" className="mb-3" text="Edit" color="black" onClick={onClick}/>{" "} */}
          <Tasks tasks={tasks} onDelete={DeleteDetails} onAdd={AddTask} />
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add New Staff Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                placeholder="Enter Id Number"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                placeholder="Enter Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                placeholder="Enter Birthday"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Enter Job Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <CustomButton
              size="sm"
              className="mb-3"
              text="Close"
              color="gray"
              onClick={handleClose}
            />{" "}
            <CustomButton
              size="sm"
              className="mb-3"
              text="Submit"
              color="black"
              value="Submit"
              onClick={AddTask}
            />{" "}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
Staff.defaultProps = {
  title: "Staff Details",
};
Staff.propTypes = {
  title: PropTypes.string.isRequired,
};
