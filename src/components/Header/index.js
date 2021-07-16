import React from 'react';

import Burger from 'src/containers/Burger';
import Nav from 'src/containers/Nav';

import logo from './Logo.png';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__logo-container">
        <img className="header__logo" src={logo} />
    </div>
    <Burger />
    <Nav />
  </div>
);

export default Header;