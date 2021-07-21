// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Edito from 'src/components/Edito';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';

import UserProfile from 'src/containers/UserProfile';
import SearchResults from 'src/containers/SearchResults';
import userList from '../../data/userlist.js';
import RangeInput from '../RangeInput';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <h2>Page d'accueil!</h2>
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
          <h2>Coucou, c'est la page d'inscription</h2>
        </Route>
        <Route path="/user/:id" exact>
          <UserProfile />
        </Route>
        <Route path="/login" exact>
          <Edito title="Conditions Générales" />
        </Route>
        <Route path="/contact" exact>
          <Edito title="Contact" />
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
