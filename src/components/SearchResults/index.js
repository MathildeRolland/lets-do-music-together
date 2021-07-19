import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './searchresults.scss';
import UserCard from '../UserCard';

let userName = "Joe La Patate";
let userAge = 31;
let userLocation = "Vaucluse";
let userExperience = 7;
let userInstruments = [1,6,2,6];
let userGenres = ["Taekwondo","Kebab","Jeet Kune Do","Flamenco","Jujitsu"];

let users = [1,2,3,4]

// Component
const SearchResults = () => {
    return(
        <div className="search-results"> 
            <UserCard user={users[0]}/>
            <UserCard user={users[0]}/>
            <UserCard user={users[0]}/>
            <UserCard user={users[0]}/>
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default SearchResults;