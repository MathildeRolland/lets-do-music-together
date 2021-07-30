import React from 'react';
import Input from 'src/containers/Input';
import { useHistory } from 'react-router-dom';
import Button from '../Button';


import './contact.scss';

const Contact = ({ manageSubmit, handleChange }) => {
  const history = useHistory();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
    // history.push('/');
  };
  
  const objectname = 'contact';
  return (


  <div className="contact">
    <div className="title">
      <h1>Let's Come Together</h1>
      <h2>Let the music play !</h2>
    </div>
    
    <div className="contact__content"> 
      <div className="contact__header">
        <h3>Une question, un commentaire, un avis? Contactez nous</h3>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          label="Nom"
          objectname={objectname}
          placeholder="Veuillez renseigner votre nom"
        />
        <Input
          type="text"
          name="email"
          label="Email"
          objectname={objectname}
          placeholder="Veuillez renseigner votre email"
        />
        <Input
          type="text"
          name="subject"
          label="Sujet"
          objectname={objectname}
          placeholder="Veuillez renseigner le sujet du message"
        />
        <label htmlFor="message" className="input__label">Message</label>
        <textarea 
          onChange={(evt) => {handleChange(evt.target.value, "message", objectname)}}
          className="input__textarea"
          name="message"
          placeholder="Veuillez renseigner votre message"
          objectname={objectname}
        />
        <Button 
          type="submit"
          value="Contactez-nous"
        />
      </form>
    </div>
  </div>
  );
};

export default Contact;
