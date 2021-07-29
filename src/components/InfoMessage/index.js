import React from 'react';

import './info-message.scss';

const InfoMessage = ({ message }) => (
  <div className="info-message">
    <p className="info-message__message">{message}</p>
  </div>
);

export default InfoMessage;