import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

const data = ['0km', '10km', '20km', '30km', '40km', '50km'];

// Component
const RangeInput = ({ list, type, name, step, min }) => {
    const max = data.length - 1;
    return(
        <div className="advanced-form__input">
            <input 
                type={type}
                className='ranged-input'
                min={min} max={max}
                id="customRange2"
                list={list}
                step={step}
                name={name}
            />
            <datalist className="range-datalist" id={list}>
                {
                    data.map( (element) => <option key={element} className="range-datalist__item" value={element}>{element}</option>)
                }
            </datalist>
        </div>
    );
};

RangeInput.propTypes = {
    list: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
};

export default RangeInput;