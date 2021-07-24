import React from 'react';
import { useHistory } from 'react-router';

import Input from 'src/containers/Input';
import './modal.scss';

const Modal = () => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Redirection vers page home
    history.push("/");
  };

  return (
    <div className="modal__background">
      <div className="modal">
      <div className="modal__header">
        <h3>Se connecter</h3>
        <button className="close" type="button">X</button>
        </div>
        <div className="modal__content"> 
        <form className="modal__form" onSubmit={handleSubmit}>
          <Input 
            name="email"
            type="email"
            placeholder="Votre email..."
            label="Veuillez renseigner votre email"
            objectname="login"
          />
          <Input 
            name="password"
            type="password"
            placeholder="Votre mot de passe..."
            label="Veuillez renseigner votre mot de passe"
            objectname="login"
          />
            <input type="submit" className="modal__submit" value="Se connecter" />
          </form>
      </div>
      </div>
    </div>
  );

};

export default Modal;
