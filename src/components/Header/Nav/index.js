import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import './nav.scss';

const Nav = ({ isBurgerClicked }) => (
  <nav className={isBurgerClicked ? "nav nav--open" : "nav"}>
    <ul className="nav__list">
        <ListItem text="Rechercher" />
        <ListItem text="Mon compte" />
        <ListItem text="Inscription" />
        <ListItem text="Connexion" />
    </ul>
  </nav>
);

Nav.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
};

export default Nav;