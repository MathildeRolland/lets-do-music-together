import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { returnSelectList } from 'src/selectors';
import { customStyles } from 'src/selectors';
import { customTheme } from 'src/selectors';

import Radio from 'src/containers/Radio';
import RangeInput from 'src/components/RangeInput';
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
                    options={instrumentsOptions} 
                    placeholder="Choisissez votre instrument" 
                    styles={customStyles} 
                    autoFocus 
                    isSearchable
                    name="instrument"
                    theme={customTheme}
                    onChange={(evt) => {manageChange(evt.value, 'instrument')}}
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
                <label className="advanced-form__label" htmlFor="perimeter">Périmètre de déplacement</label>
                <RangeInput
                    type="range" 
                    name="perimeter" id="perimeter"
                    list="perimeters"
                    min="0"
                    step="1"
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

export default AdvancedForm;