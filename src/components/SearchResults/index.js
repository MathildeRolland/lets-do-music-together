import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './searchresults.scss';
import UserCard from '../UserCard';
import Loader from 'src/components/Loader';
import InfoMessage from 'src/components/InfoMessage';

// Component
const SearchResults = ({ musiciansFound, isLoading }) => {
    let pluralS = (musiciansFound.length>1)? "s" : "";
    return(
        <div className="search-results">
            <div className="search-results--title">
                <h1 className="search-results--title">MUSICIEN{pluralS.toUpperCase()} TROUVE{pluralS.toUpperCase()}</h1>
                {musiciansFound.length !== 0 &&
                    <p className="search-results--total results">Vous avez {musiciansFound.length} potentiel{pluralS} copain{pluralS} de musique :D</p>
                }
            </div>
            <div className="search-results--separator"> </div>
            {isLoading && <Loader />}
            {!isLoading &&
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
            }
            {musiciansFound.length === 0 && <InfoMessage />}
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