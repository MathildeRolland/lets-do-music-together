import React from 'react';

import './button.scss';


const Button = ({type, value }) => (
  <div className="button_button">
    
    <input
      className="button"
      type={type}
      value={value}
    />
  </div>
);


export default Button;


