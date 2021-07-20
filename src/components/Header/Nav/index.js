import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import './nav.scss';

const Nav = ({ isBurgerClicked }) => (
  <nav className={isBurgerClicked ? "nav nav--open" : "nav"}>
    <ul className="nav__list">
        <ListItem text="Rechercher" path="/research" />
        <ListItem text="Mon compte" path="/account"/>
        <ListItem text="Inscription" path="/subscribe" />
        <ListItem text="Connexion" path="/login"/>
    </ul>
  </nav>
);

Nav.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
};

export default Nav;