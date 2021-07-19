// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';
import UserProfile from '../UserProfile';
import SearchResults from '../SearchResults';

// == Composant
const App = () => (
  <div className="app">
    <div className='fake-header'></div>
    {/*<UserProfile />*/}
    {<SearchResults />}
    <div className='fake-footer'></div>
    <Header />
    <Footer />
  </div>
);

// == Export
export default App;
