import React from 'react';

import './checkbox.scss';

const Checkbox = ({ name, label, property, objectname, handleChange, isChecked }) => {

    return (
        <div className="checkbox">
            <input
                className="checkbox__checkbox"
                type="checkbox"
                id={name}
                name={name}
                value={name}
                onChange={(evt) => {handleChange(evt.target.value.toLowerCase())}}
            />
            <label className="checkbox__label" htmlFor={name}>{label}<span className="checkbox__home-made-checkbox" /></label>
        </div>
      );
};


export default Checkbox;