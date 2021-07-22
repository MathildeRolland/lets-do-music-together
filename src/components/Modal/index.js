import React from 'react';

import Input from 'src/components/Input';
import './modal.scss';

const Modal = () => (
  
  <div className="modal__background">
    <div className="modal">
    <div className="modal__header">
      <h3>Se connecter</h3>
      <button className="close" type="button">X</button>
      </div>
      <div className="modal__content"> 
      <form className="modal__form">
        <Input 
          name="email"
          type="email"
          placeholder="Votre email..."
          label="Veuillez renseigner votre email"
          required
        />
        <Input 
          name="password"
          type="password"
          placeholder="Votre mot de passe..."
          label="Veuillez renseigner votre mot de passe"
          required
        />
          {/* <input type="email" name="email" id="email" required placeholder="Adresse Email" />
          <input type="password" name="firstname" id="firstname" required placeholder="Mot de passe" /> */}
          <input type="submit" className="modal__submit" value="Se connecter" />
        </form>
    </div>
    </div>
  </div>
);

export default Modal;
