import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './usercard.scss';
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';

let userName = "Joe La Patate";
let userAge = 31;
let userLocation = "Vaucluse (84)";
let userExperience = 7;
let userInstruments = [1,6,2,6];
let userGenres = ["Taekwondo","Kebab","Jeet Kune Do","Flamenco","Jujitsu"];
let userDisponibility = "Tous les jours";

// Component
const UserCard = () => {
    return(
        <div className="user-card"> 
            <div className="user-card_picture"> </div>
            <div className="user-card_detail"> 
                <div className="user-card_detail--user-name">{userName}</div>
                <div className="user-card_detail--user-location">{userLocation}</div>
                    <div className="user-card_detail--genre-tags">
                        <GenreTags genres={userGenres} />
                    </div>                
                <div className="user-card_footer">
                    <div className="user-card_footer--disponibility"> {userDisponibility} </div>
                    <div className="user-card_detail--instruments-tags">
                        <InstrumentTags instruments={userInstruments} />
                    </div>
                </div>
            </div>
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default UserCard;