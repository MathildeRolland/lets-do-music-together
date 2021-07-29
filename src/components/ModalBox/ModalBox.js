import React from "react";
import "./modalbox.scss";
import Input from 'src/containers/Input';
import { useHistory } from 'react-router-dom';


const ModalBox = ({ manageSubmit, isLogged, token }) => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
    // Redirection vers page home
    history.push("/");
  };

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


export default ModalBox;
