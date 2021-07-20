// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';
import UserProfile from '../UserProfile';
import SearchResults from '../SearchResults';
import userList from '../../data/userlist.js';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/*<UserProfile user={userList[1]}/>*/}
     <SearchResults userList={userList}/>
    <Footer />
  </div>
);

// == Export
export default App;
