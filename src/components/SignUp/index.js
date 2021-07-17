import React from 'react';

import './signup.scss';


const SignUp = () => (
  <div className="signup">
    <h1>S'inscrire</h1>
    <form >
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
      <input type="textarea" name="bio" id="bio" />
      <label htmlFor="avatar">Ajouter une photo de profil</label>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
      <div className="instruments">
        <label className="instrument__choice" >Instrument(s) pratiqué(s))</label>
        <select className="">
          <option value="accordeon">Accordeon</option>
          <option value="banjo">Banjo</option>
          <option value="batterie">Batterie</option>
          <option value="clarinete">clarinette</option>
          <option value="flute">Flute</option>
        </select>
      </div>
      <div className="experience">
        <label className="years__experience" >Années de pratique de la musique</label>
        <select className="">
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
        <select className="">
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
      <input type="textarea" name="influences" id="influences" />
      <label htmlFor="influences">Influences</label>
      <div className="availability">
        <label className="availability__frequency" >Disponibilités</label>
        <select className="">
          <option value="occasionally">Occassionnellement</option>
          <option value="oncemonth">1 fois par mois</option>
          <option value="severalmonth">Plusieurs fois par mois</option>
          <option value="onceweek">1 fois par semaine</option>
          <option value="severalweek">Plusieurs fois par semaine</option>
        </select>
      </div>
      <div>
        <label htmlFor="radius">Distance maximum de déplacement</label>
        <input type="range" list="tickmarks" />

        <datalist id="tickmarks" >
          <option value="0" label="0" />
          <option value="10" label="10" />
          <option value="50" label="50" />
          <option value="100" label="100" />
          <option value="150" label="150" />
          <option value="200" label="200" />
          <option value="250" label="250" />
          <option value="500" label="500" />
        </datalist>
      </div>

      <input type="submit" value="Valider l'inscription" />
    </form>
   
  </div>
);

export default SignUp;
