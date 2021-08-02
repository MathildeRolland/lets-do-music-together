import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Input from 'src/containers/Input';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';


import './signup.scss';
import RangeInput from '../../containers/RangeInput';
import TextBloc from '../../containers/TextBloc';
import Radio from 'src/containers/Radio';
import Loader from 'src/components/Loader';
import Button from '../Button';
import InfoMessage from 'src/components/InfoMessage'
// import instruments from 'src/data/instrus.js';
// import locations from 'src/data/locations.js';
// import genres from 'src/data/musicStyles.js';
import { returnSelectList, customStyles, customTheme } from 'src/selectors';


const animatedComponents = makeAnimated();



const SignUp = ({ instruments, locations, styles, availabilities, cities, city, genders, experience, manageChange, manageSubmit, doesSubscriptionfailed }) => {
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();

    history.push({
      pathname: '/login',
      state: {background: location}
    });
  };


  // == options objects for all the selects
  const instrumentsOptions = returnSelectList(instruments);
  const locationsOptions = returnSelectList(locations);
  const stylesOptions = returnSelectList(styles);
  const availabilitiesOptions = returnSelectList(availabilities);
  const citiesOptions = returnSelectList(cities);
  const defaultOptions = [{value: 1, name: 'Aast'}, {value: 2, name: 'Abainville'}, {value: 3, name: 'Abancourt'}, {value: 4, name: 'Abaucourt'}];


  // == Objectname for the controlled inputs
  const objectname = "newUser";

  // == Functions that handle the cities Async Select
  const filterCities = (inputValue) => {
    return citiesOptions.filter(c =>
      c.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterCities(inputValue));
    }, 1000);
  });

  let image = "blob:http://localhost:8080/92fa0ecb-8cfe-4819-ae42-a6e5c58093a7"
  console.log(image);
  let splitImage = image.split('blob:http://localhost:8080/')[1];
  console.log(splitImage);

  // == COMPONENT
  return(
    <div className="signup">
      <h2 className="title">S'inscrire</h2>
      {
        doesSubscriptionfailed && <InfoMessage message={"L'inscription a échoué, veuillez réessayer"} className="info-message info-message--error" />
      }

      { genders ? 
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
              {
                genders.map(
                    (gender) => <Radio key={gender.id} value={gender.id} text={gender.text} name="gender" objectname={objectname} />
                )
              }
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
            <Input
                type="number"
                label="Age"
                name="age"
                placeholder="Veuillez renseigner votre âge"
                objectname={objectname}
              />
            

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
            <div className="area">
              <label className="area__code signup__label" htmlFor="cities">Ville</label>
              <AsyncSelect
                defaultOptions={false}
                loadOptions={promiseOptions}
                styles={customStyles}
                theme={customTheme}
                placeholder="Veuillez sélectionner votre département"
                name="cities"
                onChange={(evt) => {manageChange(evt.value, 'city', objectname)}}
                isSearchable
              />
            </div>

            <label className="signup__label" htmlFor="bio">Présentation</label>
            {/*<textarea name="bio" id="bio" />*/}
            <TextBloc text={{objectname}.Bio} name="Bio" objectname={objectname} />

            <label htmlFor="picture" className="picture__profil signup__label">Ajouter une photo de profil</label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(evt) => manageChange(URL.createObjectURL(evt.target.files[0]), 'picture', objectname)}
            />

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
                placeholder="Veuillez renseigner vos années d'expérience"
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
            <Button 
          type="submit"
          value="Valider l'inscription"
          />
          </div> {/* fin de la partie de droite */}
        
        </form>
        : <Loader />
      }
    </div>
    );
  };

export default SignUp;
