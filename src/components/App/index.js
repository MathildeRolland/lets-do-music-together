// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Edito from 'src/components/Edito';
import Footer from 'src/components/Footer';
import Modal from 'src/components/Modal';
import Home from 'src/components/Home';



// == Import
import './app.scss';

import UserProfile from 'src/containers/UserProfile';
import SearchResults from 'src/containers/SearchResults';
import userList from '../../data/userlist.js';
import RangeInput from '../RangeInput';
import SignUp from '../SignUp';
import Contact from '../Contact';


// == Composant
const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          
          <Home />
        </Route>
        <Route path="/account" exact>
          <h2>Page Mon Compte</h2>
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
        <Route path="/login" exact>
          <Modal title="login" />
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
      </Switch>
      

      <Footer />
    </div>
  );
};
// == Export
export default App;
