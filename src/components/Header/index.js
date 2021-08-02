import React from 'react';
import { NavLink } from 'react-router-dom';

import Burger from 'src/containers/Burger';
import Nav from 'src/containers/Nav';

import logo from './Logo.png';
import './header.scss';

const Header = ({ handleClick }) => (
  <div className="header">
    <div className="header__container">
      <div className="header__logo-container">
        <NavLink to="/" exact onClick={handleClick}>
          <img className="header__logo" src={logo} />
        </NavLink>
      </div>
      <Burger />
    </div>
    <Nav />
  </div>
);

export default Header;