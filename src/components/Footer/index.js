import React from 'react';

import ListItem from './ListItem';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
        <ListItem text="Contact" path="/contact" />
        <ListItem text="Conditions générales" path="/conditions-generales" />
        <ListItem text="Politique de confidentialité" path="/confidentialite" />
    </ul>
  </div>
);

export default Footer;