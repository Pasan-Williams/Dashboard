import React from "react";
import './Register.css';
import '../../index.css';
import '../../Auth/Auth.css';
import { Form ,Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Register() {
    return (
    <div>

            <Form style={{width:"80%", marginLeft:"10%",color:'white'}}>
            <h3 className="center mb-3"style={{backgroundColor:"Black",padding:8,borderRadius:4}}>SIGN UP</h3>
                <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control  placeholder="Last Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                
                <Button type="submit" variant="dark" style={{color:"white"}}>Register</Button>

                <span style={{float:"right"}}>
                    Already have an Account ?
                    <Link to="/LoginComponent" style={{textDecoration: 'none'}}>Sign In</Link>
                </span>
            </Form>
        </div>
    );
  }
  
  export default Register;