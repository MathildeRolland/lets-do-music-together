import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import './userprofile.scss';

const UserProfile = ({ user }) => {
    console.log(user);

    const createMarkup = (data) => {
        return {__html: DOMPurify.sanitize(data)};
    };

    return (
        <main className="user-profile">

            <div className="user-profile_main">
                <div className="user-profile_picture"></div>
                <div className="user-profile_main--user-name">{user.firstname + " " + user.lastname}</div>
                <div className="user-profile_main--user-age-location">{user.age} ans - {user.Departments.name + " (" + user.Departments.number + ")"}</div>
                <div className="user-profile_main--user-experience"> Musicien(ne) depuis {user.experience} ans</div>
                <div className="user-profile_main--label"> Instruments:</div>
                    <InstrumentTags instruments={user.Instruments} />
                <div className="user-profile_main--label"> Style(s):</div>    
                    <GenreTags genres={user.styles} />     
                <div className="contactButton">CONTACTER</div>
            </div>

            <div className="user-profile_detail">
                <div className="user-profile_detail--label distance"> Périmetre:   </div> 
                {" "}{user.perimeter}km
                <div className="user-profile_detail--label"> Disponibilité:   </div> 
                <div className="user-profile_detail--text"> {user.availability !== null ? user.availability.text : "pas de donnée"} </div>
                <div className="user-profile_detail--label"> Influences:  </div> 
                <div className="user-profile_detail--text" dangerouslySetInnerHTML={createMarkup(user.influence)} />
                <div className="user-profile_detail--label"> Biographie:</div> 
                <div className="user-profile_detail--text" dangerouslySetInnerHTML={createMarkup(user.bio)} />     
            </div>

        </main>
    );
};
  
// UserProfile.propTypes = {
//     user: PropTypes.objectOf(
//         PropTypes.shape({
//             firstname: PropTypes.string.isRequired,
//             lastname: PropTypes.string.isRequired,
//             age: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             Locations: PropTypes.objectOf(
//                 PropTypes.shape({
//                     number: PropTypes.number.isRequired,
//                 })
//             ).isRequired,
//             experience: PropTypes.string.isRequired,
//             Instruments: PropTypes.array.isRequired,
//             Genres: PropTypes.array.isRequired,
//             perimeter: PropTypes.number.isRequired,
//             availability: PropTypes.string.isRequired,
//             influence: PropTypes.string.isRequired,
//             bio: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// }

export default UserProfile;
