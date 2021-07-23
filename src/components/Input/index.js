import React from 'react';

import './input.scss';

const Input = ({ name, type, label, placeholder, objectname, value, handleChange }) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>{label}</label>
    <input
      className="input__input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required
      onChange={(evt) => {handleChange(evt.target.value, name, objectname)}}
    />
  </div>
);

export default Input;