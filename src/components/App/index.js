// == Import npm
import React from 'react';
import SignUp from '../SignUp';
// import Home from '../Home';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Modal from 'src/components/Modal';


// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
     
    <Header />
    <Modal />
    <SignUp />
    <Footer />
  </div>
);

// == Export
export default App;
