import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";
//import "./modalbox.scss";

const ModalBox = () => {
  const { isShowing, toggle} = useModal();

  return (
  
    <div className="connect__button">
      <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      
      />
  </div>

  );
};
export default ModalBox;
