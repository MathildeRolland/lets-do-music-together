// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Footer />
  </div>
);

// == Export
export default App;
