import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './genretags.scss';

// Component
const GenreTags = ({genres}) => {
    return(
        <div className="genre-tags"> 
            {   
                genres.map( element => (
                        <div key={element.name} className="genre-tag"> {element.name} </div>
                    )
                )
            }
        </div>
    );
};          
            
GenreTags.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default GenreTags;
