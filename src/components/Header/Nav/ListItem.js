import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ListItem = ({ text, path, handleNavClick }) => (
  <li className="nav__list-item">
    <NavLink to={path} className="nav__link" onClick={handleNavClick} exact>{text}</NavLink>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  // path: PropTypes.object.isRequired,
};

export default ListItem;
