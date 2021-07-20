import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ListItem = ({ text, path }) => (
  <li className="footer__list-item">
    <NavLink to={path} exact>{text}</NavLink>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ListItem;