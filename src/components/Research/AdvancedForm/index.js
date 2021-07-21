import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { returnSelectList } from 'src/selectors';

import Radio from '../Radio';
import './advanced-form.scss';

const animatedComponents = makeAnimated();

const AdvancedForm = ({ instruments, locations, musicStyles }) => {
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

    // Selects styles
    const customStyles = {
        control: (defaultStyles, state) => ({
            ...defaultStyles,
            boxShadow: state.isFocused ? '0 0 1px 2px #2DBF84' : 'none',
            borderColor: state.isSelected ? '#2DBF84' : 'none',
            borderWidth: state.isSelected ? '2px' : '0px',
            backgroundColor: state.isFocused ? '#B0A9A9' : '#585555',
            cursor: 'pointer',
        }),
        singleValue: (defaultStyles, state) => ({
            ...defaultStyles,
            color: '#111',
        }),
        menuList: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: '0px',
            borderRadius: '5px',
        }),
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            cursor: 'pointer',
        }),
        multiValue: (defaultStyles, state) => ({
            ...defaultStyles,
            background: '#232323',
            border: '1px solid #2DBF84',
            borderRadius: '4px',
        }),
        multiValueLabel: (defaultStyles, state) => ({
            ...defaultStyles,
            color: '#B0A9A9',
        }),
        multiValueRemove: (defaultStyles, state) => ({
            ...defaultStyles,
            color: '#B0A9A9',
        })
    };

    const customTheme = (theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary50: '#2DBF84',
                primary25: '#585555',
                primary: '#585555',
                neutral0: '#B0A9A9',
            },
    });


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
                />
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="perimeter">Périmètre de déplacement</label>
                <input 
                    type="range" 
                    className="advanced-form__input"
                    name="availability" id="availability"
                    list="availabilities"
                    min="0"
                    max="4"
                    step="1"
                />
                <datalist className="advanced-form__datalist" id="availabilities">
                    <option className="advanced-form__datalist-item" value="0" />
                    <option className="advanced-form__datalist-item" value="1" />
                    <option className="advanced-form__datalist-item" value="2" />
                    <option className="advanced-form__datalist-item" value="3" />
                    <option className="advanced-form__datalist-item" value="4" />
                </datalist>
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="availability">Disponibilités</label>
                <Select 
                    options={availabilitiesOptions} 
                    placeholder="Quelles sont vos disponibilités?" 
                    styles={customStyles} 
                    isSearchable
                    name="location"
                    theme={customTheme}
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
                    name="location"
                    theme={customTheme}
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