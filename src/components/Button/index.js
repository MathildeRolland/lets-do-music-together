import React from 'react';

import './button.scss';


const Button = ({type, value, onClick }) => (
  <div className="button_button">
    
    <input
      className="button"
      type={type}
      value={value}
      onClick={onClick}
    />
  </div>
);


export default Button;


