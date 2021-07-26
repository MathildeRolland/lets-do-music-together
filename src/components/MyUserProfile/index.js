import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import Input from '../../containers/Input';
import TextBloc from '../../containers/TextBloc';
import Radio from 'src/containers/Radio';
import RangeInput from 'src/containers/RangeInput/MyUserProfileRangeInput.js';
import './myuserprofile.scss';

import { returnSelectList, customStyles, customTheme } from 'src/selectors';

const animatedComponents = makeAnimated();

const MyUserProfile = ({ currentUser, instruments, locations, musicStyles, manageSelectChange, handleChange }) => {
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
        //console.log("Ce qui entre dans la fonction currentUserToSelect", array);
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
        //console.log("Ce que retourne la fonction currentUserToSelect", newArray);
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
                <div className="profile__line">
                    <div className="profile__label">Prénom:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'firstname','currentUser')}} 
                        value={currentUser.firstname}
                        type='text'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__line">
                    <div className="profile__label">Nom:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'lastname','currentUser')}} 
                        value={currentUser.lastname}
                        type='text'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__line">
                    <div className="profile__label">Pseudonyme:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'pseudo','currentUser')}} 
                        value={currentUser.pseudo}
                        type='text'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__line">
                    <div className="profile__label">Email:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'email','currentUser')}} 
                        value={currentUser.email}
                        type='email'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__line">
                    <div className="profile__label">Age:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'age','currentUser')}} 
                        value={currentUser.age}
                        type='number'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__label">Sexe:</div>
                <div className="profile__gender-radios" name="gender">
                    <input type="radio" name="gender" id="Homme" value="1" onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser')}} checked={(currentUser.gender===1)}></input>
                    <label className="advanced-form__radio-label" htmlFor="Homme"><span className="advanced-form__radio"></span>Homme</label>
                    <input type="radio" name="gender" id="Femme" value="2" onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser')}} checked={(currentUser.gender===2)}></input>
                    <label className="advanced-form__radio-label" htmlFor="Femme"><span className="advanced-form__radio"></span>Femme</label>
                    <input type="radio" name="gender" id="Autre" value="3" onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser')}} checked={(currentUser.gender===3)}></input>
                    <label className="advanced-form__radio-label" htmlFor="Autre"><span className="advanced-form__radio"></span>Autre</label>
               </div>
                <div className="profile__line">
                    <div className="profile__label">Département:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'Locations','currentUser')}} 
                        value={currentUser.Locations}
                        type='text'
                        className='profile__input'>
                    </input>
                </div>
                <div className="profile__line">     
                    <div className="profile__label">Périmetre de déplacement:</div>                    
                    <div className='profile__range-data'>{currentUser.perimeter}km</div>
                </div>
                <input 
                    onChange={(evt) => {handleChange(evt.target.value,'perimeter','currentUser')}} 
                    value={currentUser.perimeter}
                    type='range'
                    className='range-input'
                    min='0'
                    max='50'
                    step='5'>
                </input>
                <div className="profile__line">
                    <div className="profile__label">Status:</div>
                    <input 
                        onChange={(evt) => {handleChange(evt.target.value,'status','currentUser')}} 
                        value={currentUser.status}
                        type='text'
                        className='profile__input'>
                    </input>
                </div>
            </div>
            <div className="profile-main_right">           
                <div className="profile__line">     
                    <div className="profile__label">Années d'expérience:</div>                    
                    <div className='profile__range-data'>{currentUser.experience}+ ans</div>
                </div>
                <input 
                    onChange={(evt) => {handleChange(evt.target.value,'experience','currentUser')}} 
                    value={currentUser.experience}
                    type='range'
                    className='range-input'
                    min='0'
                    max='10'
                    step='1'>
                </input>
                <div className="profile__label">Instruments:</div>
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
                />                 
                    {/* <InstrumentTags instruments={currentUser.Instruments} /> */}  
                <div className="profile__label">Styles:</div>  
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
                    {/* <GenreTags genres={currentUser.Genres} /> */}             
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