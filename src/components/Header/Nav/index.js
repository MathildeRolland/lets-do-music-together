import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ListItem from 'src/containers/Nav/ListItem';
import './nav.scss';

// const Nav = ({ isBurgerClicked }) => {
  

//   return (
    
//     <nav className={isBurgerClicked ? "nav nav--open" : "nav"}>
//       <ul className="nav__list">
//           <ListItem text="Rechercher" path="/research" />
//           <ListItem text="Mon compte" path="/account"/>
//           <ListItem text="Inscription" path="/subscribe" />
//           <ListItem text="Connexion" path={{pathname: "/login", state: {background: location}}}/>            
//       </ul>
//     </nav>

//   );
// };

const Nav = ({ isBurgerClicked, isLogged }) => {
  const location = useLocation();

  return (
    <nav className={isBurgerClicked ? "nav nav--open" : "nav"}>
      <ul className="nav__list">
          <ListItem text="Rechercher" path="/research" />
          {isLogged && <ListItem text="Mon compte" path="/account" />}
          { !isLogged && <ListItem text="Inscription" path="/subscribe" /> }
          { !isLogged && <ListItem text="Connexion" path={{pathname: "/login", state: {background: location}}} /> }
          { isLogged && <ListItem text="Se déconnecter" path={{pathname:"/logout", state: {background: location}}} /> }
      </ul>
    </nav>
  );
};


Nav.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
};

export default Nav;
