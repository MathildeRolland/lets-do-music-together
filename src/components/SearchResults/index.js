import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './searchresults.scss';
import UserCard from '../UserCard';
import Loader from 'src/components/Loader';

// Component
const SearchResults = ({ musiciansFound }) => {
    let pluralS = (musiciansFound.length>1)? "s" : "";
    return(
        <div className="search-results">
            <div className="search-results--title">
                <h1 className="search-results--title">MUSICIEN{pluralS.toUpperCase()} TROUVE{pluralS.toUpperCase()}</h1>
                <p className="search-results--total results">Vous avez {musiciansFound.length} potentiel{pluralS} copain{pluralS} de musique :D</p>
            </div>
            <div className="search-results--separator"> </div>
            {musiciansFound ? 
                <div className="search-results--cards"> 
                    {
                        musiciansFound.map( (user)=> (      
                                <div key={user.id}>
                                    <UserCard key={user.id} {...user}/>
                                </div>
                            )
                        )
                    }
                </div>
                : <Loader />
            }
        </div>
    );
};          
            
SearchResults.propTypes = {
    musiciansFound: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};

export default SearchResults;