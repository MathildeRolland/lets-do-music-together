import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './searchresults.scss';
import UserCard from '../UserCard';

// Component
const SearchResults = ({ userList }) => {
    let pluralS = (userList.length>1)? "s" : "";
    return(
        <div className="search-results">
            <div className="search-results--title">
                <h1 className="search-results--title">MUSICIEN{pluralS.toUpperCase()} TROUVE{pluralS.toUpperCase()}</h1>
                <p className="search-results--total results">Vous avez {userList.length} potentiel{pluralS} copain{pluralS} de musique :D</p>
            </div>
            <div className="search-results--separator"> </div>
            <div className="search-results--cards"> 
                {
                    userList.map( (user)=> (      
                            <div key={user.id}>
                                <UserCard key={user.id} {...user}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};          
            
SearchResults.propTypes = {
    userList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default SearchResults;