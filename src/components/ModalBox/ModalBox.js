import React, { useEffect } from "react";
import "./modalbox.scss";
import Input from 'src/containers/Input';
import { useHistory } from 'react-router-dom';
import Button from "../Button";
import InfoMessage from 'src/components/InfoMessage';


const ModalBox = ({ manageSubmit, isLogged, isSubscriptionDone, message }) => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
    // Redirection vers page home
    history.push("/");
  };

  // Handle click on the close modal cross
  const handleClick = () => {
    history.goBack();
  }

  return (

       
          <div className="modal__background">
          <div className="modal">
            <div className="modal__header">
              <h3>Se connecter</h3>
              <button className="close" type="button" onClick={handleClick}>X</button>
            </div>
            {
              isSubscriptionDone && <InfoMessage message={message} className="info-message info-message--success" />
            }

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
                <Button 
                  type="submit"
                  value="Se connecter"
                />
              </form>
            </div>
          </div>
        </div>

  );
};


export default ModalBox;
