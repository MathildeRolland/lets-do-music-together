import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'src/containers/Nav/ListItem';
import './nav.scss';

const Nav = ({ isBurgerClicked, isLogged }) => (
  <nav className={isBurgerClicked ? "nav nav--open" : "nav"}>
    <ul className="nav__list">
        <ListItem text="Rechercher" path="/research" />
        {isLogged && <ListItem text="Mon compte" path="/account" />}
        { !isLogged && <ListItem text="Inscription" path="/subscribe" /> }
        { !isLogged && <ListItem text="Connexion" path="/login" /> }
        { isLogged && <ListItem text="Se déconnecter" path="/logout" /> }
    </ul>
  </nav>
);

Nav.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
};

export default Nav;