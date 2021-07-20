import React from 'react';

import AdvancedForm from 'src/containers/AdvancedForm';
import './research.scss';

const Research = () => (
  <div className="research">
    <h2 className="research__title">Recherche de musiciens</h2>
    <p className="research__paragraph">Veuillez sélectionner les filtres souhaités.</p>
    <AdvancedForm />
  </div>
);

export default Research;