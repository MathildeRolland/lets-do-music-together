import React from 'react';
import { useHistory } from 'react-router-dom';

import 'src/components/ModalBox/modalbox.scss';
import './logout.scss';

const Logout = ({ manageDeconnexion }) => {
    const history = useHistory();

    const handleDeconnexion = () => {
        manageDeconnexion();
        localStorage.clear();
        history.push("/");
    };

    return (
        <div className="logout modal__background">
            <div className="modal">
                <div className="modal__header">
                <h3>Voulez-vous vous déconnecter?</h3>
                <button className="close" type="button">X</button>
                </div>
                <div className="modal__content"> 
                    <button type="button" className="modal__submit" value="non">Non, jme suis trompé</button>
                    <button type="button" className="modal__submit" value="oui" onClick={handleDeconnexion}>Oui</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
