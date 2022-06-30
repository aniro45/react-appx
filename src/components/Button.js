import React from "react";
import './Button.css'

const Button = (props) => {


    return(
        <div className="btnDiv">
            <button className={props.className} onClick={props.onClick} >{props.btnName} </button>
        </div>
    )
}

export default Button;