import React from 'react';
import { useHistory } from 'react-router-dom';

import 'src/components/ModalBox/modalbox.scss';
import Button from '../Button';
import './logout.scss';

const Logout = ({ manageDeconnexion }) => {
    const history = useHistory();

    const handleDeconnexion = () => {
        manageDeconnexion();
        history.push("/");
    };

    const handleClick = () => {
      history.goBack();
    }

    return (
        <div className="logout modal__background">
            <div className="modal" >
                <div className="modal__header">
                <h3>Voulez-vous vous déconnecter?</h3>
                <button className="close" type="button" onClick={handleClick}>X</button>
                </div>
                <div className="modal__content"> 
                    {/*<button type="button" className="modal__submit" value="non" onClick={handleClick}>Non, jme suis trompé</button>*/}
                    {/*<button type="button" className="modal__submit" value="oui" onClick={handleDeconnexion}>Oui</button>*/}
                    <Button 
                      type="submit"
                      value="Non, jme suis trompé"
                      onClick={handleClick}
                    />
                    <Button 
                      type="submit"
                      value="Oui"
                      onClick={handleDeconnexion}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logout;
