import React from 'react';

import ListItem from './ListItem';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
        <ListItem text="Contact" />
        <ListItem text="Conditions générales" />
        <ListItem text="Politique de confidentialité" />
    </ul>
  </div>
);

export default Footer;