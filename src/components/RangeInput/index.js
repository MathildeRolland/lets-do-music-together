import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

// Component
const RangeInput = ({min, max, steps, onChange, rangeValue}) => {
    const handleChange = (evt) => {
        onChange(evt.target.value);
    };

    return(
        <div>
            <input 
                onChange={handleChange} 
                type="range" 
                className='range-input' 
                min={min} 
                max={max} 
                step={steps} 
                value={rangeValue}
                id="customRange2">
            </input>
            <div className="range-data">
                {rangeValue}km
            </div>
        </div>
    );
};

//InstrumentTags.propTypes = {
//};

export default RangeInput;
