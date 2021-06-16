import React from "react";
import "./Dashboard.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function DashHeader() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img alt="" src="img\logo.png" width="150" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/Dashboard" style={{ textDecoration: 'none',color:"white"}}>DashBoard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Staff" style={{ textDecoration: 'none',color:"white"}}>Staff</Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Link to="/" style={{ textDecoration: 'none'}}>
              <FiLogOut size="1.3rem" color="white" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default DashHeader;
