// == Import npm
import React from 'react';

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
  </div>
);

// == Export
export default App;
