import React from 'react';
import PropTypes from 'prop-types';

// Imports
import './textbloc.scss';

const TextBloc = ({label, data}) => (
    <div>
        <div className="profile-label">{label}:</div>
        <div className="profile-detail_bloc">{data}{data}{data}{data}{data}{data}{data}{data}{data}</div>
    </div>
);

//Page.propTypes = {
//};

export default TextBloc;
