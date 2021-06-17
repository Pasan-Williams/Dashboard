import React from "react";
import { Table } from "react-bootstrap";
import {FiTrash2, FiEdit } from "react-icons/fi";


export const Tasks = ({tasks,onDelete}) => {
  
  return (
    <Table striped bordered hover size="sm" responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>  
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.date}</td>
            <td>{task.description}</td>
            <td>
              <FiTrash2 style={{color:"red",cursor:"pointer",marginRight:"5px"}} onClick={() =>onDelete(task.id)}/> {" "}
              <FiEdit style={{color:"black",cursor:"pointer"}}/>
            
            </td>

          </tr>
        ))}
      </tbody>
    </Table>
  );
};
