import React from 'react';
import { Redirect } from 'react-router-dom';


import './signup.scss';
import RangeInput from '../../containers/RangeInput';

const SignUp = ({ manageSubmit, signUpSubmited }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
};

if(signUpSubmited) {
  return <Redirect to="/account" exact />;
}

  return(
  <div className="signup">
    <h1 className="title">S'inscrire</h1>
    <form className="form" onSubmit={handleSubmit}>
    <div className="left"> {/* début de la partie de gauche */}
      
        <input type="text" name="name" id="name" required placeholder="Nom" />
        <input type="text" name="firstname" id="firstname" required placeholder="Prénom" />
        <div className="gender">
          <input type="checkbox" name="man" id="man" />
          <label htmlFor="man">Homme</label>
          <input type="checkbox" name="woman" id="woman" />
          <label htmlFor="man">Femme</label>
          <input type="checkbox" name="other" id="other" />
          <label htmlFor="man">Autre</label>
        </div>
        <input type="email" name="email" id="email" required placeholder="Adresse Email" />
        <input type="text" name="pseudonym" id="pseudonym" required placeholder="Pseudonyme" />
        <input type="date" name="datebirth" id="datebirth" required placeholder="Date de Naissance" />

        <div className="area">
          <label className="area__code" >Département</label>
          <select className="area__select">
            <option value="ain">01 - Ain </option>
            <option value="aisne">02 - Aisne</option>
            <option value="allier">03 - Allier</option>
            <option value="haute-provence">04 - Alpes-de-Haute-Provence</option>
            <option value="hautes-alpes">05 - Hautes-alpes</option>
          </select>
        </div>
        <label htmlFor="bio">Présentation</label>
        <textarea name="bio" id="bio" />
        <label htmlFor="picture" className="picture__profil">Ajouter une photo de profil</label>
        <input type="file" id="picture" name="picture" accept="image/png, image/jpeg"></input>

      </div> {/* fin de la partie de gauche */}
      <div className="right"> {/* début de la partie de droite */}     
      
      <div className="instruments">
        <label className="instrument__choice" >Instrument(s) pratiqué(s)</label>
        <select className="instrument__select">
          <option value="accordeon">Accordeon</option>
          <option value="banjo">Banjo</option>
          <option value="batterie">Batterie</option>
          <option value="clarinete">clarinette</option>
          <option value="flute">Flute</option>
        </select>
      </div>
      <div className="experience">
        <label className="years__experience" >Années de pratique de la musique</label>
        <select className="years__choice">
          <option value="un">1</option>
          <option value="deux">2</option>
          <option value="trois">3</option>
          <option value="quatre">4</option>
          <option value="cinq">5</option>
          <option value="cinq">Entre 5 et 10</option>
          <option value="cinq">10+</option>
        </select>
      </div>
      <div className="style">
        <label className="musical__style" >Style Musical</label>
        <select className="musical__choice">
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="jazz">Jazz</option>
          <option value="soul">Soul</option>
          <option value="funk">funk</option>
          <option value="metal">Métal</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="rnb">RnB</option>
          <option value="blues">Blues</option>
          <option value="country">Country</option>
          <option value="reggae">Reggae</option>
          <option value="electro">Electro</option>
        </select>
      </div>
      <label className="influence" htmlFor="influences">Influences</label>
      <input className="influence__input" type="textarea" name="influences" id="influences" />
      <div className="availability">
        <label className="availability__frequency" >Disponibilités</label>
        <select className="availability__select">
          <option value="occasionally">Occassionnellement</option>
          <option value="oncemonth">1 fois par mois</option>
          <option value="severalmonth">Plusieurs fois par mois</option>
          <option value="onceweek">1 fois par semaine</option>
          <option value="severalweek">Plusieurs fois par semaine</option>
        </select>
      </div>
      <div className="radius">
        <label htmlFor="radius" className="radius__label">Distance maximum de déplacement</label>
        <RangeInput min={0} max={50} steps={5} unit="km" />

        {/*<input className="tickmarks" type="range" step="16.66666666" list="tickmarks" />

        <datalist id="tickmarks" >
          <option value="0" label="0" />
          <option value="50" label="50" />
          <option value="100" label="100" />
          <option value="150" label="150" />
          <option value="200" label="200" />
          <option value="250" label="250" />
          <option value="500" label="500" />
        </datalist>*/}
      </div>
      <input className="button" type="submit" value="Valider l'inscription" />
      </div> {/* fin de la partie de droite */}
     
    </form>
   
  </div>
  );
};
export default SignUp;
