import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";
import "./modalbox.scss";
import Input from 'src/containers/Input';
import { useHistory } from 'react-router';
import { Link, useLocation } from "react-router-dom";



const ModalBox = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Redirection vers page home
    history.push("/");
  };

  return (
    <div>
      <div className="connect__button">

        {/*<button className="modal-toggle" onClick={toggleLoginForm}>
          Se connecter
  </button>*/}

      <Link
        to={{
          pathname: "/login",
          state: { background: location }
        }}
      />

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Se connecter"
        >
          <div className="">
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
        </Modal>
      </div>
    </div>
  );
};
export default ModalBox;
