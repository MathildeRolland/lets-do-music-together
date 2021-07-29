// == Import npm

import { Switch, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import SignUp from 'src/containers/SignUp';
import Research from 'src/containers/Research';
import Edito from 'src/components/Edito';
import Footer from 'src/components/Footer';
import Loader from 'src/components/Loader';
import Logout from 'src/containers/Logout';

// == Import
import './app.scss';

import UserProfile from 'src/containers/UserProfile';
import SearchResults from 'src/containers/SearchResults';
import userList from '../../data/userlist.js';
import MyUserProfile from 'src/containers/MyUserProfile';
import Contact from '../Contact';
import ModalBox from 'src/containers/ModalBox';
import Page404 from '../Page404';



// == Composant
const App = ({ fetchApiDatas, token, maintainConnexion }) => {
  const location = useLocation();
  const background = location.state && location.state.background;
  
  useEffect(() => {
    fetchApiDatas();
  }, []);

  useEffect(() => {
    // Local Storage
    const localStorageToken = localStorage.getItem("token");
    console.log("getItem =====>", localStorageToken );
    if(localStorageToken) {
      maintainConnexion(localStorageToken);
    }

  }, []);



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
        <Route path="/logout" exact>
          <Logout title="logout" />
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
