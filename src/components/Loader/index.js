import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader-container">
    <div className="loader">
      <div className="loader__circle">
          <div className="loader__face loader__face--recto"></div>
          <div className="loader__face loader__face--verso"></div>
      </div>
    </div>
  </div>

);

export default Loader;