import React from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { returnSelectList, customStylesLight, customThemeLight } from 'src/selectors';

import './home.scss';


const Home = ({ departments, instrumentsList, isLogged, manageChange, manageSubmit }) => {
  const instrumentsOptions = returnSelectList(instrumentsList);
  const locationsOptions = returnSelectList(departments);
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
    history.push('/user/list');
  };

  const objectname = 'simpleResearch';

  return (
    <div className="home">
      <div className="title">
        <h1>LET'S COME TOGETHER</h1>
        <h2>Trouve des partenaires de musique proche de chez toi</h2>
      </div>
      <form className="window__search" onSubmit={handleSubmit}>
        { isLogged && <p className="home__user-message">Bonjour Pompon</p> }
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
            onChange={(evt) => {manageChange(evt.label, 'instrument', objectname)}}
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
            onChange={(evt) => {manageChange(evt.label, 'location', objectname)}}
          /> 
        </div>
        <input type="submit" className="search__button" value="chercher" />
      </form>
    </div>
  );
};
export default Home;
