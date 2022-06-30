import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
    return(
        <div>
            <input 
            className={props.className} 
            type={props.type} 
            placeholder={props.placeholder} 
            value={props.value}
            onChange={event => {
                props.onChange(event.target.value)
            }
        }
            ></input>
        </div>
    )
}

export default Input;