import React from 'react';

const ListItem = ({ text }) => (
  <li className="nav__list-item">
    <a href="#" className="nav__link">{text}</a>
  </li>
);

export default ListItem;