import React from 'react';  

const Radio = ({ value, name, manageChange }) => (
    <div className="advanced-form__radio-field">
        <input type="radio" name={name} id={value} value={value} onChange={(evt) => {manageChange(evt.target.value, name)}}/>
        <label className="advanced-form__radio-label" htmlFor={value}><span className="advanced-form__radio"></span>{value}</label>
    </div>
);

export default Radio;