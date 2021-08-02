import React from 'react';
import PropTypes from 'prop-types';

import './radio.scss';

const Radio = ({ value, name, text, objectname, manageChange }) => (
    <div className="radio">
        <input type="radio" className="radio__input" name={name} id={value} value={value} onChange={(evt) => manageChange(evt.target.value, name, objectname)}/>
        <label className="radio__label" htmlFor={value}><span className="advanced-form__radio"></span>{text}</label>
    </div>
);


Radio.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    manageChange: PropTypes.func.isRequired,
};

export default Radio;