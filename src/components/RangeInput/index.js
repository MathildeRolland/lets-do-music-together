import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

// Component
const RangeInput = ({min, max, steps, unit, onChange, rangeValue}) => {
    const handleChange = (evt) => {
        onChange(evt.target.value);
    };
    return(
        <div>
            <input 
                onChange={handleChange} 
                value={rangeValue}
                type='range'
                className='range-input'
                min={min} 
                max={max} 
                step={steps} 
                id='customRange2'>
            </input>
            <div className='range-data'>
                {rangeValue}{unit}
            </div>
        </div>
    );
};

//InstrumentTags.propTypes = {
//};

export default RangeInput;
