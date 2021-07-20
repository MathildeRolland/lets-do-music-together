import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Imports
import './usercard.scss';
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';

// Component
const UserCard = ({user}) => {
    const userId = `/user/${user.id}`;
    
    return(
        <div className="user-card"> 
            <NavLink to={userId}>
                <div className="user-card_picture"> </div>
            </NavLink>
            <div className="user-card_detail"> 
                <div className="user-card_detail--user-name">{user.firstname + " " + user.lastname}</div>
                <div className="user-card_detail--user-location">{user.Locations.name + " (" + user.Locations.number + ")"}</div>
                    <div className="user-card_detail--genre-tags">
                        <GenreTags genres={user.Genres} />
                    </div>                
                <div className="user-card_footer">
                    <div className="user-card_footer--disponibility"> {user.availability} </div>
                    <div className="user-card_detail--instruments-tags">
                        <InstrumentTags instruments={user.Instruments} />
                    </div>
                </div>
            </div>
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default UserCard;