import React from 'react';
import PropTypes from 'prop-types';

// import Nav from '../Nav';
import './burger.scss';

const Burger = ({ handleClick, isBurgerClicked }) => (
  <div className="burger" onClick={handleClick}>
    <div className={isBurgerClicked ? "burger__icon burger__icon--clicked" : "burger__icon"}>
      <div className="burger__line line1"></div>
      <div className="burger__line line2"></div>
      <div className="burger__line line3"></div>
    </div>
  </div>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isBurgerClicked: PropTypes.bool.isRequired,
};  

export default Burger;