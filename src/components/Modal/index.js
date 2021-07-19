import React from 'react';


import './modal.scss';

const Modal = () => (
  <div className="modal">
   <div className="modal__header">
     <h3>Se connecter</h3>
     <button className="close" type="button">X</button>
    </div>
    <div className="modal__content"> 
     <form className="modal__form">
        <input type="email" name="email" id="email" required placeholder="Adresse Email" />
        <input type="password" name="firstname" id="firstname" required placeholder="Mot de passe" />
        <input type="submit" value="Se connecter" />
      </form>
   </div>
  </div>
);

export default Modal;
