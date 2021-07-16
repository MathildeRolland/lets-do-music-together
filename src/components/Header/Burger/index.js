import React from 'react';
import PropTypes from 'prop-types';

// import Nav from '../Nav';
import './burger.scss';

const Burger = ({ handleClick }) => (
  <div className="burger" onClick={handleClick}>
    <div className="burger__icon">
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  </div>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};  

export default Burger;