import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Imports
import InstrumentTags from '../InstrumentTags';
import GenreTags from '../GenreTags';
import Input from '../../containers/Input';
import TextBloc from '../../containers/TextBloc';
import Switch from '../../containers/Switch';
import Loader from '../../components/Loader';
import './myuserprofile.scss';

import { returnSelectList, customStyles, customTheme } from 'src/selectors';

const animatedComponents = makeAnimated();

const MyUserProfile = ({ usersList, currentUser, tempUser, instruments, locations, musicStyles, manageSelectChange, handleChange, callUpdateTempUser, callUpdateDatabaseUser }) => {

    // Temp datas, waiting for real information from DB
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
    const currentUserToSelect = (data) => {  
        console.log('LA DATA',data);
        let newData = {}       
        if(Array.isArray(data)){
            newData = data.map( (element) => (
                    {
                        value: element.id || element.number,
                        label: element.name,
                        id: element.id || element.number,
                    }
                ));
        }else if(data){ 
            newData = {
                value: data.id || data.number,
                label: data.name,
            }
        }
        return(newData);
    };

    // Getting a clone of the currentUser object from state
    useEffect(() => {
        //currentUser = JSON.parse(JSON.stringify(usersList[5]))

        callUpdateTempUser();
    }, []);

    // manage update in DB
    const sendUpdateUserRequest = (evt) => {
        if(evt.type=="keyup" && evt.key=="Enter") {
            evt.target.blur();
            return;
        }   
        if(JSON.stringify(tempUser) !== JSON.stringify(currentUser)){
            callUpdateTempUser();
        }       
    }
    const sendUpdateUserRequestWithoutTest = (evt) => {        
        callUpdateDatabaseUser();
        callUpdateTempUser();
    }   

if(currentUser.Instruments && currentUser.styles){
return(
    <main className="my-user-profile">  
        <div className="profile__title">Informations du compte</div>
        <div className="profile__picture"></div>
        <div className="profile__main">
            <div className="profile__main--left">                 
                <Input 
                    name='firstname'
                    objectname='currentUser'
                    type='text'
                    label='Prénom:'
                    placeholder=''
                    value={currentUser.firstname}
                    handleValidation={sendUpdateUserRequest}
                />
                <Input 
                    name='lastname'
                    objectname='currentUser'
                    type='text'
                    label='Nom:'
                    placeholder=''
                    value={currentUser.lastname}
                    handleValidation={sendUpdateUserRequest}        
                />
                <Input 
                    name='pseudo'
                    objectname='currentUser'
                    type='text'
                    label='Pseudonyme:'
                    placeholder=''
                    value={currentUser.pseudo}
                    handleValidation={sendUpdateUserRequest}
                />
                <Input 
                    name='email'
                    objectname='currentUser'
                    type='text'
                    label='Email:'
                    placeholder=''
                    value={currentUser.email}
                    handleValidation={sendUpdateUserRequest}
                />
                <Input 
                    name='age'
                    objectname='currentUser'
                    type='number'
                    label='Age:'
                    placeholder=''
                    value={Number(currentUser.age)}
                    handleValidation={sendUpdateUserRequest}
                />
                <div className="input__label">Sexe:</div>
                <div className="profile__gender-radios" name="gender">
                    <input 
                        type="radio" name="gender" id="Homme" value="1" 
                        onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser'); sendUpdateUserRequestWithoutTest(evt)}} 
                        checked={(currentUser.gender===1)}>
                    </input>
                    <label className="advanced-form__radio-label" htmlFor="Homme"><span className="advanced-form__radio"></span>Homme</label>
                    <input 
                        type="radio" name="gender" id="Femme" value="2" 
                        onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser'); sendUpdateUserRequestWithoutTest(evt)}} 
                        checked={(currentUser.gender===2)}>        
                    </input>
                    <label className="advanced-form__radio-label" htmlFor="Femme"><span className="advanced-form__radio"></span>Femme</label>
                    <input 
                        type="radio" name="gender" id="Autre" value="3" 
                        onChange={(evt) => {handleChange(parseInt(evt.target.value), 'gender', 'currentUser'); sendUpdateUserRequestWithoutTest(evt)}} 
                        checked={(currentUser.gender===3)}>               
                    </input>
                    <label className="advanced-form__radio-label" htmlFor="Autre"><span className="advanced-form__radio"></span>Autre</label>
                </div>
                <div className='input'>
                    <div className="input__label">Status:</div>
                    <Switch 
                        value={currentUser.status} name='status' objectname='currentUser' 
                        handleChange={(evt) => {sendUpdateUserRequestWithoutTest(evt)}} 
                    />
                    <div className="input__label--status">{(currentUser.status)?"Activé":"Désactivé"}</div>
                </div>
            </div>
            <div className="profile__main--right">  
                <label className="input__label" htmlFor="departement">Département:</label>
                <Select 
                    options={locationsOptions} 
                    placeholder="Choisissez votre département" 
                    styles={customStyles} 
                    isSearchable
                    name="Departement"
                    theme={customTheme}
                    onChange={(evt) => {console.log(evt);handleChange({ name:evt.label,number:evt.value}, 'Departments', 'currentUser')}}//;sendUpdateUserRequestWithoutTest(evt)}}
                    value={ currentUserToSelect(currentUser.Departments) }
                />
                <div className="input">     
                    <div className="input__label">Périmetre de déplacement:</div>                    
                    <div className='profile__range-data'>{currentUser.perimeter}km</div>
                </div>
                <input 
                    onChange={(evt) => {handleChange(evt.target.value,'perimeter','currentUser')}} 
                    onMouseUp={(evt) => {sendUpdateUserRequestWithoutTest(evt)}}
                    value={currentUser.perimeter}
                    type='range'
                    className='range-input'
                    min='0'
                    max='50'
                    step='5'>
                </input>
                <div className="input">     
                    <div className="input__label">Années d'expérience:</div>                    
                    <div className='profile__range-data'>{currentUser.experience}+ ans</div>
                </div>
                <input 
                    onChange={(evt) => {handleChange(evt.target.value,'experience','currentUser')}} 
                    onMouseUp={(evt) => {sendUpdateUserRequestWithoutTest(evt)}}
                    value={currentUser.experience}
                    type='range'
                    className='range-input'
                    min='0'
                    max='10'
                    step='1'>
                </input>
                <div className="input__label">Instruments:</div>
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
                    onMenuClose={(evt) => {sendUpdateUserRequestWithoutTest(evt)}}              
                    defaultValue={ currentUserToSelect(currentUser.Instruments) }
                />                 
                <div className="input__label">Styles:</div>  
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={musicStylesOptions} 
                    placeholder="Choisissez vos styles" 
                    styles={customStyles} 
                    isSearchable
                    name="styles"
                    theme={customTheme}
                    onChange={(evt) => {manageSelectChange(evt, 'styles', 'currentUser')}}                    
                    onMenuClose={(evt) => {sendUpdateUserRequestWithoutTest(evt)}}     
                    defaultValue={ currentUserToSelect(currentUser.styles) }
                    
                />             
            </div>
        </div>

        <div className="profile__detail">
            <div className='profile__detail--bloc'>
                <div className="profile__detail--label">Influences:</div>
                <TextBloc text={currentUser.influence} name="Influences" objectname="currentUser" handleBlur={(evt) => {sendUpdateUserRequest(evt)}} />
            </div>            
            <div className='profile__detail--bloc'>
                <div className="profile__detail--label">Biographie:</div>                
                <TextBloc text={currentUser.bio} name="Bio" objectname="currentUser" handleBlur={(evt) => {sendUpdateUserRequest(evt)}} />  
            </div>              
        </div>
    </main>
)
}else{ return( <Loader />)} 
};

//Page.propTypes = {
//};

export default MyUserProfile;