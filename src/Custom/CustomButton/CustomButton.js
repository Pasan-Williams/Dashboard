import React from "react";
import './CustomButton.css';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types'


function CustomButton({text ,color,onClick}) {
    return (
      <>
       <Button size="sm" className="mb-3" style={{backgroundColor:color,borderColor:color}} onClick={onClick}> {text}</Button>
      </>
    );
  }
export default CustomButton;

CustomButton.defaultProps = {
  color:"green",
}
CustomButton.propTypes = {
  text:PropTypes.string,
  color:PropTypes.string,
  onClick:PropTypes.func.isRequired,
}