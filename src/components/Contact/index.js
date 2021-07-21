import React from 'react';


import './contact.scss';

const Contact = () => (
  <div className="contact">
    <div className="">
      <h1>Let's Comme Together</h1>
      <h2>Let the music play !</h2>
    <div className="contact__header">
      <h3>Une question, un commentaire, un avis? Contactez nous</h3>
    </div>
    <div className="contact__content"> 
      <form className="contact__form">
        <label htmlFor="nom">Votre nom</label>
        <input type="text" name="nom" id="nom" required  />
        <label htmlFor="email">Votre email</label>
        <input type="email" name="email" id="email" required  />
        <label htmlFor="subject">Sujet</label>
        <input type="textarea" name="subject" id="subject" required  />
        <input type="submit" className="modal__submit" value="Contactez-nous" />
      </form>
    </div>
    </div>
  </div>
);

export default Contact;
