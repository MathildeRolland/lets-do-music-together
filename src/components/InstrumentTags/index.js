import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './instrumenttags.scss';

// Init for unique key of each tag
let instrumentKey = 0;

// Component
const InstrumentTags = ({instruments}) => {
    return(
        <div className="instrument-tags"> 
            {
                instruments.map( element => {  
                    instrumentKey++; // For each element of the array, add 1 to the key
                    return(
                        <div key={instrumentKey} className="instrument-tag"> {element} </div>
                    )
                })
            }
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default InstrumentTags;
