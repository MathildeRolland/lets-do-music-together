import React from 'react';
import PropTypes from 'prop-types';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import './userprofile.scss';

const UserProfile = () => {
    // Template datas
    let userName = "Joe La Patate";
    let userAge = 31;
    let userLocation = "Vaucluse";
    let userExperience = 7;
    let userInstruments = [1,6,2,6];
    let userGenres = ["Taekwondo","Kebab","Jeet Kune Do","Flamenco","Jujitsu"];
    let userDistance = 50;
    let userDisponibility = "Je suis disponible la nuit une semaine sur deux et exceptionellement les nuits de pleine lune.";
    let userInfluences = "Truc, Machin, Les Escargots, Patate Chaude";
    let userBiography = "Biographie la biographie bio la bio et la biographie mais surtout son contenu, le contenu de la biographie et la biographie de la biographie biographie la biographie biographie la biographie bio la bio et la biographie mais surtout son contenu, le contenu de la biographie et la biographie de la biographie biographie la biographie.";

    return (
        <main className="user-profile">
            <div className="user-profile_picture"></div>
            <div className="user-profile_main">
                <div className="user-profile_main--user-name">{userName}</div>
                <div className="user-profile_main--user-age-location">{userAge} ans - {userLocation}</div>
                <div className="user-profile_main--user-experience"> Musicien(ne) depuis {userExperience} ans</div>
                <div className="user-profile_main--label"> Instruments:</div>
                    <InstrumentTags instruments={userInstruments} />            
                <div className="user-profile_main--label"> Style(s):</div>    
                    <GenreTags genres={userGenres} />     
                <div className="contactButton">CONTACTER</div>           
            </div>

            <div className="user-profile_detail">
                <div className="user-profile_detail--label distance"> Périmetre:   </div> 
                {" "}{userDistance}km
                <div className="user-profile_detail--label"> Disponibilité:   </div> 
                <div className="user-profile_detail--text"> {userDisponibility} </div>
                <div className="user-profile_detail--label"> Influences:  </div> 
                <div className="user-profile_detail--text"> {userInfluences}</div> 
                <div className="user-profile_detail--label"> Biographie:</div> 
                <div className="user-profile_detail--text"> {userBiography}        </div>       
            </div>
        </main>
    );
};
  

//Page.propTypes = {
//};

export default UserProfile;
