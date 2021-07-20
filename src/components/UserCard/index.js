import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Imports
import './usercard.scss';
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';

// Component
const UserCard = ({ id, firstname, lastname, name, Locations, availability, Instruments, Genres }) => {
    const userPath = `/user/${id}`;
    
    return(
        <div className="user-card"> 
            <NavLink to={userPath}>
                <div className="user-card_picture"> </div>
            </NavLink>
            <div className="user-card_detail"> 
                <div className="user-card_detail--user-name">{firstname + " " + lastname}</div>
                <div className="user-card_detail--user-location">{Locations.name + " (" + Locations.number + ")"}</div>
                    <div className="user-card_detail--genre-tags">
                        <GenreTags genres={Genres} />
                    </div>                
                <div className="user-card_footer">
                    <div className="user-card_footer--disponibility"> {availability} </div>
                    <div className="user-card_detail--instruments-tags">
                        <InstrumentTags instruments={Instruments} />
                    </div>
                </div>
            </div>
        </div>
    );
};          
            
//InstrumentTags.propTypes = {
//};

export default UserCard;