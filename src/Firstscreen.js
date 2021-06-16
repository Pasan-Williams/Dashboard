import React from "react";
import { Card} from "react-bootstrap";
import CustomButton from "./Custom/CustomButton/CustomButton";
import './Firstscreen.css';
import logo from './logo.svg';

function Firstscreen() {
  return (
    <div className="container">
    <div>
        <div style={{backgroundColor:"black",padding:"20px",color:"white"}}>
        <img src={logo} width="100" height="50" /> Welcome To React
        </div>
        <div className="container-warp">
            <div className="mt-2 card-style">
            <Card>
                <Card.Header as="h5">Step 1</Card.Header>
                <Card.Body>
                    <Card.Text>
                    First setup for this .....
                    </Card.Text>
                    <CustomButton/>
                </Card.Body>
            </Card>
            </div> 
            <div className="mt-2 card-style">
            <Card>
                <Card.Header as="h5">Step 2</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Second setup for this .....
                    </Card.Text>
                    <CustomButton/>
                </Card.Body>
            </Card>
            </div>
            <div className="mt-2 card-style">
            <Card>
                <Card.Header as="h5">Step 3</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Third setup for this .....
                    </Card.Text>
                    <CustomButton/>
                </Card.Body>
            </Card>
            </div>      
        </div>  
    </div>
    </div>
  
  );
}

export default Firstscreen;