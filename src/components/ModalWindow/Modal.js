
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import  './modalwindow.scss';

const Modal = ({ isShowing, hide}) => isShowing  ?(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
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
          </div>
        </>

): null;

  

export default Modal;

