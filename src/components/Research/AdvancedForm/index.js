import React from 'react';
import { useHistory } from 'react-router-dom';

import Option from '../Option';
import Radio from '../Radio';
import './advanced-form.scss';

const AdvancedForm = () => {
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Redirect the user to the results page
        history.push('/user/list');
    };

    return (
        <form className="advanced-form" onSubmit={handleSubmit}>
            <h3 className="advanced-form__title">Recherche avancée</h3>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="instrument">Que cherchez-vous?</label>
                <select type="select" className="advanced-form__select" name="instrument" id="instruments" required>
                    <option className="advanced-form__option" value="" selected disabled hidden>Sélectionnez l'instrument</option>
                    <Option value="Batterie" />
                    <Option value="Guitare" />
                    <Option value="Piano" />
                    <Option value="Clarinette" />
                    <Option value="Harpe" />
                </select>
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="location">Où?</label>
                <select type="select" className="advanced-form__select" name="location" id="location" required>
                    <option className="advanced-form__option" value="" selected disabled hidden>Sélectionnez le département</option>
                    <Option value="Ain" />
                    <Option value="Rhône" />
                    <Option value="Isère" />
                    <Option value="Drôme" />
                </select>
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="perimeter">Périmètre de déplacement</label>
                <select type="select" className="advanced-form__select" name="perimeter" id="perimeter" required>
                    <option className="advanced-form__option" value="" selected disabled hidden>Sélectionnez le périmètre</option>
                    <Option value="entre 1 et 5km" />
                    <Option value="entre 5 et 10km" />
                    <Option value="entre 10 et 20km" />
                    <Option value="au-delà de 20km" />
                </select>
            </div>
            <div className="advanced-form__field">
                <label className="advanced-form__label" htmlFor="availability">Disponibilités</label>
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
                <label className="advanced-form__label" htmlFor="genre">Style de musique</label>
                <select type="select" className="advanced-form__select" name="genre" id="genre" required>
                    <option className="advanced-form__option" value="" selected disabled hidden>Sélectionnez le style musical</option>
                    <Option value="rock" />
                    <Option value="jazz" />
                    <Option value="RnB" />
                    <Option value="pop" />
                    <Option value="funk" />
                </select>
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