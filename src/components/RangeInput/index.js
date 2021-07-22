import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './rangeinput.scss';

const data = ['0km', '10km', '20km', '30km', '40km', '50km'];

// Component
const RangeInput = () => {
    let max = data.length;
    return(
        <div className="advanced-form__input">
            <label for="customRange2" class="ranged-label">Example range</label>
            <input type="range" className='ranged-input' min="1" max={max} id="customRange2" list="availabilities" />
            {/* <div className="range-datalist">
                { data.map( (element)=> (<div className="range-datalist__item">{element}</div>))}
            </div> */}
            <datalist className="range-datalist" id="availabilities">
                {
                    data.map( (element) => <option key={element} className="range-datalist__item" value={element} />)
                }
                {/* <option className="advanced-form__datalist-item" value="0" />
                <option className="advanced-form__datalist-item" value="1" />
                <option className="advanced-form__datalist-item" value="2" />
                <option className="advanced-form__datalist-item" value="3" />
                <option className="advanced-form__datalist-item" value="4" /> */}
            </datalist>
        </div>
    );
};

//InstrumentTags.propTypes = {
//};

export default RangeInput;