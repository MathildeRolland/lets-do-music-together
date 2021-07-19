// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Edito from 'src/components/Edito';
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
    <Research />
    {/* <Edito title="Conditions Générales" /> */}
    <Footer />
  </div>
);

// == Export
export default App;
