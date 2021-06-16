import React from "react";
import './App.css';
import LoginComponent from './Auth/Login/LoginComponent';
import RegisterComponent from './Auth/Register/RegisterComponent';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Staff from "./Staff/Staff";
import { AddForm } from "./Staff/AddForm";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/RegisterComponent">
        <RegisterComponent  style={{}}/>
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
      <Route path="/Staff">
        <Staff/>
      </Route>
      <Route path="/AddForm">
        <AddForm/>
      </Route>
      <Route path="/" >
        <LoginComponent />
      </Route>
    </Switch>
    </BrowserRouter>
      
  );
}

export default App;
