import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from 'src/containers/Input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


import './signup.scss';
import RangeInput from '../../containers/RangeInput';
import TextBloc from '../../containers/TextBloc';
// import instruments from 'src/data/instrus.js';
// import locations from 'src/data/locations.js';
// import genres from 'src/data/musicStyles.js';
import { returnSelectList, customStyles, customTheme } from 'src/selectors';

const animatedComponents = makeAnimated();



const SignUp = ({ instruments, locations, styles, availabilities, experience, manageChange, manageSubmit }) => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
    history.push("/");
  };

  const instrumentsOptions = returnSelectList(instruments);
  const locationsOptions = returnSelectList(locations);
  const stylesOptions = returnSelectList(styles);
  const availabilitiesOptions = returnSelectList(availabilities);

  const objectname = "newUser";

  return(
    <div className="signup">
      <h2 className="title">S'inscrire</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="left"> {/* début de la partie de gauche */}
          <Input 
            type="text"
            name="lastname"
            placeholder="Veuillez renseigner votre nom"
            label="Nom"
            objectname={objectname}
            required
          />
          <Input 
            type="text"
            name="firstname"
            placeholder="Veuillez renseigner votre prénom"
            label="Prénom"
            objectname={objectname}
            required
          />
          <div className="gender">
            <input 
              type="checkbox"
              name="homme"
              value="1"
              id="homme"
              onChange={(evt) => {manageChange(evt.target.value, 'gender', objectname)}}
            />
            <label htmlFor="homme">Homme</label>
            <input
              type="checkbox"
              name="femme"
              value="2"
              id="femme"
              onChange={(evt) => {manageChange(evt.target.value, 'gender', objectname)}}
            />
            <label htmlFor="femme">Femme</label>
            <input
              type="checkbox"
              name="autres"
              value="3"
              id="autres" 
              onChange={(evt) => {manageChange(evt.target.value, 'gender', objectname)}}
            />
            <label htmlFor="autres">Autre</label>
          </div>
          <Input 
            type="email"
            name="email"
            placeholder="Veuillez renseigner votre email"
            label="Email"
            objectname={objectname}
            required
          />
          <Input 
            type="password"
            name="password"
            placeholder="Veuillez renseigner votre mot de passe"
            label="Mot de passe"
            objectname={objectname}
            required
          />
          <Input 
            type="text"
            name="pseudo"
            placeholder="Veuillez renseigner votre pseudo"
            label="Pseudo"
            objectname={objectname}
            required
          />
          {/* <Input 
            type="date"
            name="datebirth"
            placeholder="Veuillez renseigner votre date de naissance"
            label="Date de naissance"
            objectname={objectname}
            required
          /> */}

          <div className="area">
            <label className="area__code signup__label" htmlFor="department">Département</label>
            <Select 
              options={locationsOptions} 
              styles={customStyles}
              theme={customTheme}
              placeholder="Veuillez sélectionner votre département"
              name="department"
              onChange={(evt) => {manageChange(evt.value, 'department', objectname)}}
              isSearchable
            />
          </div>
          <label className="signup__label" htmlFor="bio">Présentation</label>
          {/*<textarea name="bio" id="bio" />*/}
          <TextBloc text={{objectname}.Bio} name="Bio" objectname={objectname} />
          <label htmlFor="picture" className="picture__profil signup__label">Ajouter une photo de profil</label>
          <input type="file" id="picture" name="picture" accept="image/png, image/jpeg"></input>

        </div> {/* fin de la partie de gauche */}

        <div className="right"> {/* début de la partie de droite */}     
          <div className="instruments">
            <label className="instrument__choice signup__label" htmlFor="instrument">Instrument(s) pratiqué(s)</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={instrumentsOptions} 
              styles={customStyles}
              theme={customTheme}
              placeholder="Veuillez sélectionner vos instruments"
              name="instruments"
              onChange={(evt) => {manageChange(evt, 'instruments', objectname)}}
              isSearchable
              />
          </div>
          <div className="experience">
            <label className="musical__style signup__label" htmlFor="experience">Expérience</label>
            <input
              name="experience"
              type="range"
              name="experience"
              id="experience"
              min="0"
              max="10"
              steps="1"
              value={experience}
              objectname={objectname}
              onChange={(evt) => manageChange(evt.target.value, "experience", objectname)}
            />
            <div className='range-data'>
              {experience}+
            </div>
            {/* <Input
              type="number"
              label="Années d'expérience"
              name="experience"
              objectname={objectname}
            /> */}
          </div>
        <div className="style">
          <label className="musical__style signup__label" htmlFor="style">Style Musical</label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={stylesOptions} 
            styles={customStyles}
            theme={customTheme}
            placeholder="Veuillez sélectionner vos styles musicaux"
            name="styles"
            onChange={(evt) => {manageChange(evt, 'styles', objectname)}}
            isSearchable
          />
        </div>
        <label className="influence signup__label" htmlFor="influences">Influences</label>
        <TextBloc text={{objectname}.influences} name="influences" objectname={objectname} />
        <div className="availability">
          <label className="availability__frequency signup__label" htmlFor="availability" >Disponibilités</label>
          <Select 
              options={availabilitiesOptions} 
              styles={customStyles}
              theme={customTheme}
              placeholder="Veuillez sélectionner vos styles musicaux"
              name="availability"
              onChange={(evt) => {manageChange(evt.value, 'availability', objectname)}}
              isSearchable
            />
          </div>
          <div className="perimeter">
            <label htmlFor="perimeter" className="radius__label">Distance maximum de déplacement</label>
            <RangeInput
              min={0}
              max={50}
              steps={5}
              unit="km"
              name="perimeter"
              objectname={objectname}
            />
          </div>
          <input className="button" type="submit" value="Valider l'inscription" />
        </div> {/* fin de la partie de droite */}
      
      </form>
    
    </div>
    );
  };

export default SignUp;
