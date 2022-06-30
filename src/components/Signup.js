import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import Axios from 'axios';
import './Signup.css'
import Display from "./Display";

const Signup = (props) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [serverRes, setServerRes] = useState("");

    const onBtnClick = () => {
        let dataObj = {
            fullName,
            email,
            userName,
            mobile,
            password,
            confirmPassword
        }

        Axios.post('http://127.0.0.1:8000/userData', dataObj).then(res => {
            console.log(res);
            setServerRes(res);
        })
        
    }

    return (
        <div className="signup-form">
            <h1>User Signup</h1>
            <Input className="input_fields" type="text" placeholder="Full Name" value={fullName} onChange={setFullName}></Input>
            <Input className="input_fields" type="email" placeholder="Email" value={email} onChange={setEmail}></Input>
            <Input className="input_fields" type="text" placeholder="Username" value={userName} onChange={setUserName}></Input>
            <Input className="input_fields" type="number" placeholder="Mobile number" value={mobile} onChange={setMobile}></Input>
            <Input className="input_fields" type="password" placeholder="Password" value={password} onChange={setPassword}></Input>
            <Input className="input_fields" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={setConfirmPassword}></Input>
            <Button className="btn" type="button" btnName="Submit" onClick={onBtnClick}></Button>
            <Display onChange={serverRes} ></Display>
        </div>
    )
}

export default Signup;