// == Import npm
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import SignUp from 'src/components/SignUp';
import Research from 'src/components/Research';
import Edito from 'src/components/Edito';
import Footer from 'src/components/Footer';


// == Import
import './app.scss';

import UserProfile from 'src/containers/UserProfile';
import SearchResults from 'src/containers/SearchResults';
import userList from '../../data/userlist.js';
import RangeInput from '../RangeInput';
import MyUserProfile from '../MyUserProfile';
import Contact from '../Contact';
import ModalBox from 'src/components/ModalBox/ModalBox';
import Page404 from '../Page404';


// == Composant
const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="app">

      <Header />
      <Switch location={ background || location }>
        <Route path="/" exact>          
          <Home />
        </Route>
        <Route path="/account" exact>
          <MyUserProfile user={userList[1]}/>
        </Route>
        <Route path="/user/list" exact>
            <SearchResults />
        </Route>
        <Route path="/research" exact>
            <Research />
        </Route>
        <Route path="/subscribe" exact>
          <SignUp />
        </Route>
        <Route path="/user/:id" exact>
          <UserProfile />
        </Route>
        <Route path="/subscribe" exact>
          <SignUp />
        </Route>
        <Route path="/contact" exact>
          <Contact title="Contact" />
        </Route>
        <Route path="/conditions-generales" exact>
          <Edito title="Conditions Générales" />
        </Route>
        <Route path="/confidentialite" exact>
          <Edito title="Politique de confidentialité" />
        </Route>
        <Route >
          <Page404  />
        </Route>
        
      </Switch>
      
      {background && <Route path="/login" children={<ModalBox title="Se connecter" />} />}
      
      <Footer />
    </div>
  );
};
// == Export
export default App;
