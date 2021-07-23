import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

// Component
const RangeInput = ({min, max, steps, unit, onChange, perimeter, name}) => {
    const handleChange = (evt) => {
        console.log(evt.target.value);
        onChange(evt.target.value, name);
    };

    return(
        <div>
            <input 
                onChange={handleChange} 
                value={perimeter}
                type='range'
                name={name}
                className='range-input'
                min={min} 
                max={max} 
                step={steps} 
                id='customRange2'>
            </input>
            <div className='range-data'>
                {perimeter}{unit}
            </div>
        </div>
    );
};

// InstrumentTags.propTypes = {
//};

RangeInput.defaultProps = {
    perimeter: 0,
}

export default RangeInput;
