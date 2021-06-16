import React from "react";
import '../../index.css';
import '../../Auth/Auth.css';
import Login from "./Login";
import AuthLayout from "../AuthLayout/AuthLayout";

function LoginComponent() {
    return (
        <AuthLayout layoutImage="img\login.png">
            <Login />
        </AuthLayout>
    );
  }
  
  export default LoginComponent;