import React from "react";
import "../styles/Input.css"

const Input = ({type, placeholder, value, onChange}) => {
    return( 
    <input className = "Input"
    value= {value}
    onChange = {onChange}
    type={type}
    placeholder = {placeholder}
    />
    );
};



export default Input;