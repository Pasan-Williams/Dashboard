import React from "react";
import "./Dashboard.css";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import userIcon from "../../src/icons/user.svg";
import ActiveIcon from "../../src/icons/svg1.svg";
import GroupIcon from "../../src/icons/svg2.svg";
import FailIcon from "../../src/icons/svg3.svg";
import DoughnutChart from "../chart/DoughnutChart";
import PieChart from "../chart/PieChart";
import LineChart from "../chart/LineChart";

function DashBody() {
  return (
    <Container fluid>
      <Row>
        <Col Xs={12} sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Body>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col>
                  <img src={userIcon} />
                </Col>
                <Col>
                  <Row>
                    <h6>Total Users</h6>
                  </Row>
                  <Row>
                    <Card.Title>300</Card.Title>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col Xs={12} sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Body>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col>
                  <img src={ActiveIcon} />
                </Col>
                <Col>
                  <Row>
                    <h6>Active Users</h6>
                  </Row>
                  <Row>
                    <Card.Title>200</Card.Title>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col Xs={12} sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Body>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col>
                  <img src={GroupIcon} />
                </Col>
                <Col>
                  <Row>
                    <h6>Groups</h6>
                  </Row>
                  <Row>
                    <Card.Title>10</Card.Title>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col Xs={12} sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Body>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Col>
                  <img src={FailIcon} />
                </Col>
                <Col>
                  <Row>
                    <h6>Login Fail Users</h6>
                  </Row>
                  <Row>
                    <Card.Title>20</Card.Title>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Header as="h6">Distribution of Users</Card.Header>
            <Card.Body>
              <DoughnutChart />
            </Card.Body>
            <Card.Footer className="text-muted text-center text-style">
              Update : 1 days ago
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={3} className="mt-2">
          <Card className="card-style">
            <Card.Header as="h6">Groups</Card.Header>
            <Card.Body>
              <PieChart />
            </Card.Body>
            <Card.Footer className="text-muted text-center text-style">
              Update : 2 Days ago
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} className="mt-2">
          <Card className="card-style">
            <Card.Header as="h6">Active Users</Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} lg={6} className="mt-2 mb-2">
          <Card className="card-style">
            <Card.Header as="h6">Login Users</Card.Header>
            <Card.Body>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Doe bre</td>
                    <td>8.20 am</td>
                    <td>20/05/2021</td>
                    <td>Login</td>
                  </tr>
                  <tr>
                    <td>Chamon</td>
                    <td>8.25 am</td>
                    <td>20/05/2021</td>
                    <td>Login</td>
                  </tr>
                  <tr>
                    <td>Dilum</td>
                    <td>8.26 am</td>
                    <td>20/05/2021</td>
                    <td>Login</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} className="mt-2 mb-2">
          <Card className="card-style">
            <Card.Header as="h6">Faield Login Users</Card.Header>
            <Card.Body>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ewan</td>
                    <td>8.20 am</td>
                    <td>20/05/2021</td>
                    <td>Failed Login</td>
                  </tr>
                  <tr>
                    <td>Comin</td>
                    <td>8.25 am</td>
                    <td>20/05/2021</td>
                    <td>Failed Login</td>
                  </tr>
                  <tr>
                    <td>Dasan</td>
                    <td>8.26 am</td>
                    <td>20/05/2021</td>
                    <td>Failed Login</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DashBody;
