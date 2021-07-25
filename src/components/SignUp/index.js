import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Input from 'src/components/Input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


import './signup.scss';
import RangeInput from '../../containers/RangeInput';
import TextBloc from '../../containers/TextBloc';
import instruments from 'src/data/instrus.js';
import locations from 'src/data/locations.js';
import genres from 'src/data/musicStyles.js';
import { returnSelectList, customStyles, customTheme } from 'src/selectors';

const animatedComponents = makeAnimated();



const SignUp = ({ manageSubmit, signUpSubmited, currentUser }) => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/account");
    manageSubmit();
  };

  // if(signUpSubmited) {
  //   return <Redirect to="/account" exact />;
  // }

  const instrumentsOptions = returnSelectList(instruments);
  const locationsOptions = returnSelectList(locations);
  const genresOptions = returnSelectList(genres);
  const availabilitiesOptions = [
    {value: 'plusieurs fois par semaine', label: 'Plusieurs fois par semaine'},
    {value: 'une fois par semaine', label: 'Une fois par semaine'},
    {value: 'plusieurs fois par mois', label: 'Plusieurs fois par mois'},
    {value: 'une fois par mois', label: 'Une fois par mois'},
  ];

  return(
    <div className="signup">
      <h1 className="title">S'inscrire</h1>
      <form className="form" onSubmit={handleSubmit}>
      <div className="left"> {/* début de la partie de gauche */}
          <Input 
            type="text"
            name="lastname"
            placeholder="Veuillez renseigner votre nom"
            label="Nom"
            required
          />
          <Input 
            type="text"
            name="firstname"
            placeholder="Veuillez renseigner votre prénom"
            label="Prénom"
            required
          />
          <div className="gender">
            <input type="checkbox" name="man" id="man" />
            <label htmlFor="man">Homme</label>
            <input type="checkbox" name="woman" id="woman" />
            <label htmlFor="man">Femme</label>
            <input type="checkbox" name="other" id="other" />
            <label htmlFor="man">Autre</label>
          </div>
          <Input 
            type="email"
            name="email"
            placeholder="Veuillez renseigner votre email"
            label="Email"
            required
          />
          <Input 
            type="text"
            name="pseudonym"
            placeholder="Veuillez renseigner votre pseudo"
            label="Pseudo"
            required
          />
          <Input 
            type="date"
            name="datebirth"
            placeholder="Veuillez renseigner votre date de naissance"
            label="Date de naissance"
            required
          />

          <div className="area">
            <label className="area__code signup__label" htmlFor="location">Département</label>
            <Select 
              options={locationsOptions} 
              styles={customStyles}
              theme={customTheme}
              placeholder="Veuillez sélectionner votre département"
              name="location"
              isSearchable
            />
          </div>
          <label className="signup__label" htmlFor="bio">Présentation</label>
          {/*<textarea name="bio" id="bio" />*/}
          <TextBloc text={currentUser.Bio} name="Bio" objectname="currentUser" />
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
            name="instrument"
            isSearchable
            />
        </div>
        <div className="experience">
          <Input
            type="number"
            label="Années d'expérience"
            name="experience"
          />
        </div>
        <div className="style">
          <label className="musical__style signup__label" >Style Musical</label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={genresOptions} 
            styles={customStyles}
            theme={customTheme}
            placeholder="Veuillez sélectionner vos styles musicaux"
            name="genre"
            isSearchable
          />
        </div>
        <label className="influence signup__label" htmlFor="influences">Influences</label>
        <TextBloc text={currentUser.Influences} name="Influences" objectname="currentUser" />
        <div className="availability">
          <label className="availability__frequency signup__label" htmlFor="availability" >Disponibilités</label>
          <Select 
              options={availabilitiesOptions} 
              styles={customStyles}
              theme={customTheme}
              placeholder="Veuillez sélectionner vos disponibilités"
              name="availability"
              isSearchable
            />
        </div>
        <div className="radius">
          <label htmlFor="radius" className="radius__label">Distance maximum de déplacement</label>
          <RangeInput min={0} max={50} steps={5} unit="km" />
        </div>
        <input className="button" type="submit" value="Valider l'inscription" />
        </div> {/* fin de la partie de droite */}
      
      </form>
    
    </div>
    );
  };

export default SignUp;
