// == Import npm
import React from 'react';
import { Link } from "react-router-dom";


// == Import
import './page404.scss';




// == Composant
const Page404 = () => {

  return (
    <div className="page404">
      <div className="title404">
        <h1>HellOOOOOO... Is it me you're looking for ?</h1>
        <h2>Si tu cherches Lionel pour un duo, retrouve le en page d'
        <Link to="/">
        accueil
      </Link>
          </h2>
      </div>        
    </div>
  );
};
// == Export
export default Page404;
