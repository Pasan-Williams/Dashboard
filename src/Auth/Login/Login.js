import React from "react";
import './Login.css';
import '../../index.css';
import '../../Auth/Auth.css';
import { Form ,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
  

function Login() {
    return (
         <div>
        <Form style={{width:"80%", marginLeft:"10%",color:'white'}}>
            <h3 className="center mb-3" style={{backgroundColor:"Black",padding:8,borderRadius:4}}>SIGN IN</h3>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                
                <Form.Group className="mt-3" >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Link to="/Dashboard">
                    <Button type="submit" variant="dark">Login</Button>
                </Link>
           
                <span style={{float:"right"}}>
                    I haven't an Account ?
                    <Link to="/RegisterComponent">Sign Up</Link>
                </span>
        
        </Form>
        </div>
   
    );
  }
  
  export default Login;