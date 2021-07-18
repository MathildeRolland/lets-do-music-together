import React from 'react';

import './advanced-form.scss';

const AdvancedForm = () => (
  <form className="advanced-form">
    <h3 className="advanced-form__title">Recherche avancée</h3>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="instrument">Que cherchez-vous?</label>
        <select type="select" className="advanced-form__select" name="instrument" id="instrument">
            <option className="advanced-form__option" value="batterie">Batterie</option>
            <option className="advanced-form__option" value="guitare">Guitare</option>
            <option className="advanced-form__option" value="piano">Piano</option>
            <option className="advanced-form__option" value="clarinette">Clarinette</option>
        </select>
    </div>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="location">Où?</label>
        <input type="text" className="advanced-form__input" name="location" id="location" />
    </div>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="perimeter">Périmètre de déplacement</label>
        <select type="select" className="advanced-form__select" name="perimeter" id="perimeter">
            <option className="advanced-form__option" value="entre 1 et 5km">entre 1 et 5km</option>
            <option className="advanced-form__option" value="entre 5 et 10km">entre 5 et 10km</option>
            <option className="advanced-form__option" value="entre 10 et 20km">entre 10 et 20km</option>
            <option className="advanced-form__option" value="au-dessus de 20km">au-dessus de 20km</option>
        </select>
    </div>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="availability">Périmètre de déplacement</label>
        <input type="range" className="advanced-form__input" name="availability" id="availability" />
    </div>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="genre">Style de musique</label>
        <select type="select" className="advanced-form__select" name="genre" id="genre">
            <option className="advanced-form__option" value="rock">Rock</option>
            <option className="advanced-form__option" value="jazz">Jazz</option>
            <option className="advanced-form__option" value="RnB">RnB</option>
            <option className="advanced-form__option" value="pop">Pop</option>
            <option className="advanced-form__option" value="funk">Funk</option>
        </select>
    </div>
    <div className="advanced-form__field">
        <label className="advanced-form__label" htmlFor="gender">Sexe</label>
        <div className="advanced-form__radios" name="gender">
            <input type="radio" className="advanced-form__radio" name="homme" id="homme"/>
            <label className="advanced-form__radio-label" htmlFor="homme">Homme</label>
            <input type="radio" className="advanced-form__radio" name="femme" id="femme"/>
            <label className="advanced-form__radio-label" htmlFor="femme">Femme</label>
            <input type="radio" className="advanced-form__radio" name="autre" id="autre"/>
            <label className="advanced-form__radio-label" htmlFor="autre">Autre</label>
        </div>
    </div>
    <input type="submit" className="advanced-form__submit"/>
  </form>
);

export default AdvancedForm;