import React from 'react';
import Loader from 'src/components/Loader';

import AdvancedForm from 'src/containers/AdvancedForm';
import './research.scss';

const Research = ({ instruments, departments, musicStyles, availabilities, genders}) => (
  <div className="research">
    <h2 className="research__title">Recherche de musiciens</h2>
    <p className="research__paragraph">Veuillez sélectionner les filtres souhaités.</p>
    { (instruments && departments && musicStyles && availabilities && genders) ?
      <AdvancedForm /> : <Loader />
    }
  </div>
);

export default Research;