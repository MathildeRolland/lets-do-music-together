import React from 'react';

import ListItem from './ListItem';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
        <ListItem text="Rechercher" />
        <ListItem text="Mon compte" />
        <ListItem text="Inscription" />
        <ListItem text="Connexion" />
    </ul>
  </nav>
);

export default Nav;