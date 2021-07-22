import React from 'react';
import PropTypes from 'prop-types';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import './userprofile.scss';

const UserProfile = ({ user }) => (
    <main className="user-profile">

        <div className="user-profile_main">
            <div className="user-profile_picture"></div>
            <div className="user-profile_main--user-name">{user.firstname + " " + user.lastname}</div>
            <div className="user-profile_main--user-age-location">{user.age} ans - {user.Locations.name + " (" + user.Locations.number + ")"}</div>
            <div className="user-profile_main--user-experience"> Musicien(ne) depuis {user.experience} ans</div>
            <div className="user-profile_main--label"> Instruments:</div>
                <InstrumentTags instruments={user.Instruments} />
            <div className="user-profile_main--label"> Style(s):</div>    
                <GenreTags genres={user.Genres} />     
            <div className="contactButton">CONTACTER</div>
        </div>

        <div className="user-profile_detail">
            <div className="user-profile_detail--label distance"> Périmetre:   </div> 
            {" "}{user.perimeter}km
            <div className="user-profile_detail--label"> Disponibilité:   </div> 
            <div className="user-profile_detail--text"> {user.availability} </div>
            <div className="user-profile_detail--label"> Influences:  </div> 
            <div className="user-profile_detail--text"> {user.influence}</div> 
            <div className="user-profile_detail--label"> Biographie:</div> 
            <div className="user-profile_detail--text"> {user.bio}        </div>       
        </div>

    </main>
);
  
UserProfile.propTypes = {
    user: PropTypes.objectOf(
        PropTypes.shape({
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            Locations: PropTypes.objectOf(
                PropTypes.shape({
                    number: PropTypes.number.isRequired,
                })
            ).isRequired,
            experience: PropTypes.string.isRequired,
            Instruments: PropTypes.array.isRequired,
            Genres: PropTypes.array.isRequired,
            perimeter: PropTypes.number.isRequired,
            availability: PropTypes.string.isRequired,
            influence: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default UserProfile;
