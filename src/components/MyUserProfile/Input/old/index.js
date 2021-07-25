import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './input.scss';

const Input = ({label, data, handleChange}) => (
    <div className='profile-line'>
        <div className="profile-label">{label}:</div>
        <input className="profile-data" value={data} onChange={handleChange}></input>  
    </div>
);

//Page.propTypes = {
//};

export default Input;