import React from 'react';  

const Radio = ({ value, name }) => (
    <div className="advanced-form__radio-field">
        <input type="radio" className="advanced-form__radio" name={name} id={value} value={value}/>
        <label className="advanced-form__radio-label" htmlFor={name}>{value}</label>
    </div>
);

export default Radio;