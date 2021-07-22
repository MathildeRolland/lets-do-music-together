import React from 'react';

import './input.scss';

const Input = ({name, type, label, placeholder, value}) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>{label}</label>
    <input className="input__input" name={name} type={type} placeholder={placeholder} value={value}/>
  </div>
);

export default Input;