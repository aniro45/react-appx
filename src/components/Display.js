import React from 'react';
import './Display.css';

const Display = (props) => {

    props = {
        fullName: "Darshan shinde",
        email: "darshan@gmail.com",
        username: "darsh49",
        mobile: "9545313243",
        password: "abc@123",
        confirmPassword: "abc@123"

    }

    return(
        <div className='display-wrapper'>
            <h1>Display: User Data</h1>
            <h3>Full Name: {props.fullName}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Username: {props.username}</h3>
            <h3>Mobile: {props.mobile}</h3>
            <h3>password: {props.password}</h3>
            <h3>Confirm Password: {props.confirmPassword}</h3>
        </div>
    )
}

export default Display;