import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './usercard.scss';
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';

// Component
const UserCard = ({user}) => {
    return(
        <div className="user-card"> 
            <div className="user-card_picture"> </div>
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