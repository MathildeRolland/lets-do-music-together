import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

// Component
const RangeInput = ({data}) => {
    let max = data.length;
    return(
        <div>
            <label for="customRange2" class="ranged-label">Example range</label>
            <input type="range" className='ranged-input' min="1" max={max} id="customRange2"></input>
            <div className="range-datalist">
                { data.map( (element)=> (<div>{element}</div>))}
            </div>
        </div>
    );
};

//InstrumentTags.propTypes = {
//};

export default RangeInput;