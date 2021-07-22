import React from 'react';
import PropTypes from 'prop-types';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import './myuserprofile.scss';

const MyUserProfile = ({user}) => (
    <main className="my-user-profile">
        <div className="profile-head">
            
        <h2>Informations du compte</h2>
            {/*<h1 className="profile-name">{user.firstname + " " + user.lastname}</h1> */}
            <div className="profile-picture"></div>
        </div>      
        <ul className="profile-main">
            <div className="profile-main_left">
                
                <li>                                     
                    <div className="profile-main_label">Prénom:</div>
                    <div className="profile-data">{user.firstname}</div>  
                </li>
                <li>                            
                    <div className="profile-main_label">Nom:</div>
                    <div className="profile-data">{user.lastname}</div>       
                </li>
                <li>
                    <div className="profile-main_label">Pseudonyme:</div>
                    <div className="profile-data">{user.age}</div>       
                </li>
                <li>
                    <div className="profile-main_label">Email:</div>
                    <div className="profile-data">{user.email}</div>
                </li>
                <li>
                    <div className="profile-main_label">Age:</div>
                    <div className="profile-data">{user.age}</div>
                </li>                
                <li>
                    <div className="profile-main_label">Sexe:</div>
                    <div className="profile-data">{user.gender}</div>
                </li>
                <li>
                    <div className="profile-main_label">Departement:</div>
                    <div className="profile-data">{user.Locations.name + " (" + user.Locations.number + ")"}</div>
                </li>
                <li>
                    <div className="profile-main_label">Périmetre de déplacement:</div>
                    <div className="profile-data">{user.perimeter+"km"}</div>
                </li>
                <li>
                    <div className="profile-main_label">Status du compte:</div>
                    <div className="profile-data">{user.status}</div>
                </li>
            </div>
            <div className="profile-main_right">
                <li>
                    <div className="profile-main_label">Expérience:</div>
                    <div className="profile-data">{user.experience+" an(s)"}</div>
                </li>
                <li>
                    <div className="profile-main_label">Instruments:</div>                
                </li>
                <InstrumentTags instruments={user.Instruments} />        
                <li>
                    <div className="profile-main_label">Styles:</div>                
                </li>
                <GenreTags genres={user.Genres} />               
            </div>
        </ul>

        <div className="profile-detail">
            <div className="profile-detail_flex">
                <div>
                    <div className="profile-detail_label">Influences:</div>
                    <div className="profile-detail_bloc">{user.influence}{user.influence}{user.influence}{user.influence}{user.influence}{user.influence}{user.influence}{user.influence}{user.influence}</div>
                </div>
                <div>
                    <div className="profile-detail_label">Biographie:</div>
                    <div className="profile-detail_bloc">{user.bio}</div>
                </div>                
            </div>
            
        </div>
    </main>
)

//Page.propTypes = {
//};

export default MyUserProfile;