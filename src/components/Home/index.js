import React from 'react';

import './home.scss';

import background from 'src/assets/home_background.jpg';

const Home = () => (
  <div className="home">
    <div className="title">
      <h1>LET'S COME TOGETHER</h1>
      <h2>Trouve des partenaires de musique proche de chez soi</h2>
    </div>
    <form className="window__search">
      <div className="">
        <label className="musician__choice" >Que cherchez vous ?</label>
        <select className="musician">
          <option value="musicians">Musiciens</option>
          <option value="groups">Groupes</option>
          <option value="accordeon">Accordéon</option>
          <option value="banjo">Banjo</option>
          <option value="batterie">Batterie</option>
        </select>
      </div>
      <div>
        <label className="location__choice">Où ?</label>
        <select className="location">
          <option value="ain">Ain</option>
          <option value="aisne">Aisne</option>
          <option value="Alpes-de-Haute-Provence">Alpes-de-Haute-Provence</option>
          <option value="Alpes-Maritimes">Alpes-Maritimes</option>
          <option value="Alpes-Maritimes">Alpes-Maritimes</option>

        </select>
      </div>
    </form>
  </div>
);

export default Home;
