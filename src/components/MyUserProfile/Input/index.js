import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './input.scss';

const Input = ({label, data}) => (
    <div className='profile-line'>
        <div className="profile-label">{label}:</div>
        <div className="profile-data">{data}</div>  
    </div>
);

//Page.propTypes = {
//};

export default Input;