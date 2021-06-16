import React from "react";
import './Register.css';
import '../../index.css';
import '../../Auth/Auth.css';
import Register from "./Register";
import AuthLayout from "../AuthLayout/AuthLayout";
function RegisterComponent() {

    return (
    <AuthLayout layoutImage="img\Register.png">
        <Register />
    </AuthLayout>
    );
  }
  
  export default RegisterComponent;