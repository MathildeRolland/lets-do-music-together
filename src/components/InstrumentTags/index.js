import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './instrumenttags.scss';

// Component
const InstrumentTags = ({instruments}) => {
    return(
        <div className="instrument-tags"> 
            {
                instruments.map( element => {  
                    return(
                        <div key={element.name} className="instrument-tag"> {element.name} </div>
                    )
                })
            }
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default InstrumentTags;
