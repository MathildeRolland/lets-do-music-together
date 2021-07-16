import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './genretags.scss';
// Init for unique key of each tag
let genreKey = 0;

// Component
const GenreTags = ({genres}) => {
    return(
        <div className="genre-tags"> 
            {
                genres.map( element => {  
                    genreKey++; // For each element of the array, add 1 to the key
                    return(
                        <div key={genreKey} className="genre-tag"> {element} </div>
                    )
                })
            }
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default GenreTags;
