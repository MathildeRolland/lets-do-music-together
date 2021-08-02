import React from 'react';
import PropTypes from 'prop-types';

import './info-message.scss';

const InfoMessage = ({ message, className }) => (
  <div className={className}>
    <p className="info-message__message">{message}</p>
  </div>
);

InfoMessage.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
}
export default InfoMessage;