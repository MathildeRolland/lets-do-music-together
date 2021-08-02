import React from 'react';

import './input.scss';

const Input = ({ name, type, label, placeholder, objectname, value, handleChange, handleValidation= () => {} }) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>{label}</label>
    <input
      className="input__input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required
      onChange={(evt) => {handleChange(evt.target.value)}}
      onBlur={(evt)=>(handleValidation(evt))}
      onKeyUp={(evt)=>{
        if(evt.key==='Enter'){
          return(handleValidation(evt))
        }}}
    />
  </div>
);

export default Input;
