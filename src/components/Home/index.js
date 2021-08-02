import React from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { returnSelectList, customStylesLight, customThemeLight } from 'src/selectors';

import './home.scss';
import Button from '../Button';
import Loader from 'src/components/Loader';


const Home = ({ departments, instrumentsList, isLogged, manageChange, manageSubmit, pseudo }) => {
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
          { isLogged && <p className="home__user-message">Bonjour {pseudo}</p> }
          <div className="">
            <label className="musician__choice" htmlFor="instrument">Que cherchez vous ?</label>
            {
              instrumentsList && 
                <Select 
                  options={instrumentsOptions}
                  styles={customStylesLight}
                  theme={customThemeLight}
                  isSearchable
                  placeholder="Instrument"
                  name="instrument"
                  className="musician"
                  onChange={(evt) => {manageChange(evt.value, 'instrument', objectname)}}
                />
            }
            {
              !instrumentsList && <Loader />
            }
           
          </div>
          <div>
            <label className="location__choice" htmlFor="location">Où ?</label>
            {
              departments && 
                <Select 
                  options={locationsOptions}
                  styles={customStylesLight}
                  theme={customThemeLight}
                  isSearchable
                  placeholder="Département"
                  name="location"
                  className="location"
                  onChange={(evt) => {manageChange(evt.value, 'location', objectname)}}
                /> 
            }
            {
              !departments && <Loader />
            }
            
          </div>
          <input type="submit" className="search__button" value="chercher" />
        </form>
    </div>
  );
};
export default Home;
