import React from 'react';

import './switch.scss';

const Switch = ({value,name,objectname,toggleSwitch, handleChange}) => {
return(
    <label className="switch">
        <input 
            type="checkbox" 
            name={name} 
            id={name}
            objectname={objectname} 
            checked={value} 
            onChange={(evt) => {toggleSwitch(value)}}
            onClick={(evt) => {handleChange(evt)}}
        />
        <span className="slider round"></span>        
    </label>
)}

export default Switch;