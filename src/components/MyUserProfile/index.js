import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import Input from '../../containers/Input';
import TextBloc from '../../containers/TextBloc';
import './myuserprofile.scss';

import { returnSelectList, customStyles, customTheme } from 'src/selectors';

const animatedComponents = makeAnimated();

const MyUserProfile = ({ currentUser, instruments, locations, musicStyles, manageSelectChange }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
    };

    const instrumentsOptions = returnSelectList(instruments);
    const locationsOptions = returnSelectList(locations);
    const musicStylesOptions = returnSelectList(musicStyles);
    const availabilitiesOptions = [
        {value: 'plusieurs fois par semaine', label: 'Plusieurs fois par semaine'},
        {value: 'une fois par semaine', label: 'Une fois par semaine'},
        {value: 'plusieurs fois par mois', label: 'Plusieurs fois par mois'},
        {value: 'une fois par mois', label: 'Une fois par mois'},
    ];

    // This function translates the currentUser.X array into an array that
    // the Select component can use to display the X information
    const currentUserToSelect = (array) => {         
        console.log("Ce qui entre dans la fonction currentUserToSelect", array);
        let newArray = [];
        array.map( (element) => {
            newArray.push(
                {
                    value: element.name,
                    label: element.name,
                    id: element.id,
                }
            );
        })
        console.log("Ce que retourne la fonction currentUserToSelect", newArray);
        return(newArray);
    };


return(
    <main className="my-user-profile">
        <div className="profile-head">
            
        <h2>Informations du compte</h2>
            <div className="profile-picture"></div>
        </div>      
        <div className="profile-main">
            <div className="profile-main_left">          
                {/*<Input label="Prénom" data={user.firstname} />                                     
                <Input label="Nom" data={user.firstname} />      
                <Input label="Pseudonyme" data={user.age} />   
                <Input label="Email" data={user.email} />      
                <Input label="Age" data={user.age} />  
                <Input label="Sexe" data={user.gender} />  
                <Input label="Departement" data={user.Locations.name + " (" + user.Locations.number + ")"} />     
                <Input label="Périmetre de déplacement" data={user.perimeter+"km"} />     
                <Input label="Status du compte" data={user.status} />      */}             
                <Input 
                    name="firstname"
                    type="text"
                    placeholder=""
                    label="Prénom:"
                    objectname="currentUser"
                    value={currentUser.firstname}
                /> 
                <Input 
                    name="lastname"
                    type="text"
                    placeholder=""
                    label="Nom:"
                    objectname="currentUser"
                    value={currentUser.lastname}
                    isRequired
                />  
                 <Input 
                    name="pseudo"
                    type="text"
                    placeholder=""
                    label="Pseudo:"
                    objectname="currentUser"
                    value={currentUser.pseudo}
                />  
                <Input 
                    name="email"
                    type="text"
                    placeholder=""
                    label="Email:"
                    objectname="currentUser"
                    value={currentUser.email}
                />  
                <Input 
                    name="age"
                    type="number"
                    placeholder=""
                    label="Age:"
                    objectname="currentUser"
                    value={currentUser.age}
                />  
                <Input 
                    name="gender"
                    type="text"
                    placeholder=""
                    label="Sexe:"
                    objectname="currentUser"
                    value={currentUser.gender}
                />  
                <Input 
                    name="Locations"
                    type="text"
                    placeholder=""
                    label="Departement:"
                    objectname="currentUser"
                    value={currentUser.Locations}
                />  
                <Input 
                    name="perimeter"
                    type="text"
                    placeholder=""
                    label="Périmètre de déplacement:"
                    objectname="currentUser"
                    value={currentUser.perimeter}
                />  
                <Input 
                    name="status"
                    type="text"
                    placeholder=""
                    label="Status du compte:"
                    objectname="currentUser"
                    value={currentUser.status}
                />  
            </div>
            <div className="profile-main_right">                
                <Input 
                    name="experience"
                    type="number"
                    placeholder=""
                    label="Années d'expérience:"
                    objectname="currentUser"
                    value={currentUser.experience}
                />  
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={instrumentsOptions} 
                    placeholder="Choisissez vos instruments" 
                    styles={customStyles} 
                    isSearchable
                    name="Instruments"          
                    theme={customTheme}
                    onChange={(evt) => {manageSelectChange(evt, 'Instruments', 'currentUser')}}                  
                    defaultValue={ currentUserToSelect(currentUser.Instruments) }
                        
                    /* ({currentUser}) => {
                        const multipleValues = [];
                        currentUser.Instruments.map( (element) => { multipleValues.push({"id":element.id, "name":element.name})});
                        console.log(multipleValues);
                        retrun(multipleValues); 
                    }} */
                />                 
                    <InstrumentTags instruments={currentUser.Instruments} />        
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={musicStylesOptions} 
                    placeholder="Choisissez vos styles" 
                    styles={customStyles} 
                    isSearchable
                    name="Genres"
                    theme={customTheme}
                    onChange={(evt) => {manageSelectChange(evt, 'Genres', 'currentUser')}}
                    defaultValue={ currentUserToSelect(currentUser.Genres) }
                />      
                    <GenreTags genres={currentUser.Genres} />               
            </div>
        </div>

        <div className="profile-detail">
            <div className='profile-detail_bloc'>
                <div className="profile-detail_label">Influences:</div>
                <TextBloc text={currentUser.Influences} name="Influences" objectname="currentUser" />
            </div>            
            <div className='profile-detail_bloc'>
                <div className="profile-detail_label">Biographie:</div>                
                <TextBloc text={currentUser.Bio} name="Bio" objectname="currentUser"/>  
            </div>              
        </div>
    </main>
)};

//Page.propTypes = {
//};

export default MyUserProfile;