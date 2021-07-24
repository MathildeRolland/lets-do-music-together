import React from 'react';
import Input from 'src/containers/Input';


import './contact.scss';

const Contact = () => (


  <div className="contact">
    <div className="title">
      <h1>Let's Come Together</h1>
      <h2>Let the music play !</h2>
    </div>
    
    <div className="contact__content"> 
      <div className="contact__header">
        <h3>Une question, un commentaire, un avis? Contactez nous</h3>
      </div>
      <form className="contact__form">
        <Input
          type="text"
          name="name"
          label="Nom"
          objectname="contact"
          placeholder="Veuillez renseigner votre nom"
        />
        <Input
          type="text"
          name="email"
          label="Email"
          objectname="contact"
          placeholder="Veuillez renseigner votre email"
        />
        <Input
          type="text"
          name="subject"
          label="Sujet"
          objectname="contact"
          placeholder="Veuillez renseigner le sujet du message"
        />
        <label htmlFor="message" className="input__label">Message</label>
        <textarea 
          className="input__textarea"
          name="message"
          placeholder="Veuillez renseigner votre message"
          objectname="contact"
        />
        <input type="submit" className="contact__submit" value="Contactez-nous" />
      </form>
    </div>
  </div>
);

export default Contact;
