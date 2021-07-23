import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { returnSelectList, customStyles, customTheme } from 'src/selectors';

import Radio from 'src/containers/Radio';
import RangeInput from 'src/containers/RangeInput';
import './advanced-form.scss';

const animatedComponents = makeAnimated();

const AdvancedForm = ({ instruments, locations, musicStyles, manageChange }) => {
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Redirect the user to the results page
        history.push('/user/list');
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

    return (
        <form className="advanced-form" onSubmit={handleSubmit}>
            <h3 className="advanced-form__title">Recherche avancée</h3>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="instrument">Que cherchez-vous?</label>
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={instrumentsOptions} 
                    placeholder="Choisissez vos instruments" 
                    styles={customStyles} 
                    autoFocus 
                    isSearchable
                    name="instrument"
                    theme={customTheme}
                    onChange={(evt) => {manageChange(evt, 'instrument')}}
                />
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="location">Où?</label>
                <Select 
                    options={locationsOptions} 
                    placeholder="Choisissez votre département" 
                    styles={customStyles} 
                    isSearchable
                    name="location"
                    theme={customTheme}
                    onChange={(evt) => {manageChange(evt.value, 'location')}}
                />
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="perimeter">Périmètre de déplacement (en km)</label>
                <RangeInput
                    type="range"
                    name="perimeter"
                    id="perimeter"
                    min="0"
                    max="50"
                    steps="5"
                    unit="km"
                />
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="availability">Disponibilités</label>
                <Select 
                    options={availabilitiesOptions} 
                    placeholder="Quelles sont vos disponibilités?" 
                    styles={customStyles} 
                    isSearchable
                    name="availability"
                    theme={customTheme}
                    onChange={(evt) => {manageChange(evt.value, 'availability')}}
                />
                
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="genre">Style de musique</label>
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={musicStylesOptions} 
                    placeholder="Choisissez vos styles de musique" 
                    styles={customStyles} 
                    isSearchable
                    name="genre"
                    theme={customTheme}
                    onChange={(evt) => {manageChange(evt, 'genre')}}
                />
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="gender">Sexe</label>
                <div className="advanced-form__radios" name="gender">
                    <Radio value="Homme" name="gender" />
                    <Radio value="Femme" name="gender" />
                    <Radio value="Autre" name="gender" />
                </div>
            </div>
            <input type="submit" className="advanced-form__submit"/>
        </form>
    );
};

AdvancedForm.propTypes = {
    instruments: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    musicStyles: PropTypes.array.isRequired,
    manageChange: PropTypes.func.isRequired,
};

export default AdvancedForm;