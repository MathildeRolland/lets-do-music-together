import React from 'react';
import Select from 'react-select';
import { returnSelectList, customStylesLight, customThemeLight } from 'src/selectors';

import instruments from 'src/data/instrus.js';
import locations from 'src/data/locations.js';
import './home.scss';

//import background from 'src/assets/home_background.jpg';

const Home = () => {
  const instrumentsOptions = returnSelectList(instruments);
  const locationsOptions = returnSelectList(locations);

  return (
    <div className="home">
      <div className="title">
        <h1>LET'S COME TOGETHER</h1>
        <h2>Trouve des partenaires de musique proche de chez toi</h2>
      </div>
      <form className="window__search">
        <div className="">
          <label className="musician__choice" htmlFor="instrument">Que cherchez vous ?</label>
          <Select 
            options={instrumentsOptions}
            styles={customStylesLight}
            theme={customThemeLight}
            isSearchable
            placeholder="Instrument"
            name="instrument"
            className="musician"
          />
        </div>
        <div>
          <label className="location__choice" htmlFor="location">Où ?</label>
          <Select 
            options={locationsOptions}
            styles={customStylesLight}
            theme={customThemeLight}
            isSearchable
            placeholder="Département"
            name="location"
            className="location"
          /> 
        </div>
        <input type="submit" className="search__button" value="chercher"/>
      </form>
    </div>
  );
};
export default Home;
