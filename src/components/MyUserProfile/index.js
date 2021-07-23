import React from 'react';
import PropTypes from 'prop-types';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import Input from './Input';
import TextBloc from './TextBloc';
import './myuserprofile.scss';

const MyUserProfile = ({user}) => (
    <main className="my-user-profile">
        <div className="profile-head">
            
        <h2>Informations du compte</h2>
            {/*<h1 className="profile-name">{user.firstname + " " + user.lastname}</h1> */}
            <div className="profile-picture"></div>
        </div>      
        <div className="profile-main">
            <div className="profile-main_left">          
                <Input label="Prénom" data={user.firstname} />                                     
                <Input label="Nom" data={user.firstname} />      
                <Input label="Pseudonyme" data={user.age} />   
                <Input label="Email" data={user.email} />      
                <Input label="Age" data={user.age} />  
                <Input label="Sexe" data={user.gender} />  
                <Input label="Departement" data={user.Locations.name + " (" + user.Locations.number + ")"} />     
                <Input label="Périmetre de déplacement" data={user.perimeter+"km"} />     
                <Input label="Status du compte" data={user.status} />                     
            </div>
            <div className="profile-main_right">                
                <Input label="Expérience" data={user.experience+" an(s)"} /> 
                <Input label="Instruments" data={''} />                
                    <InstrumentTags instruments={user.Instruments} />        
                <Input label="Styles" data={''} />       
                    <GenreTags genres={user.Genres} />               
            </div>
        </div>

        <div className="profile-detail">
            <TextBloc label='Influences' data={user.influence} />
            <TextBloc label='Biographie' data={user.bio} />                    
        </div>
    </main>
)

//Page.propTypes = {
//};

export default MyUserProfile;