import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = ({ text, path }) => (
  <li className="footer__list-item">
    <NavLink to={path} exact>{text}</NavLink>
  </li>
);

export default ListItem;