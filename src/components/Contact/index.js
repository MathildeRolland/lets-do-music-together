import React from 'react';


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
        <label htmlFor="nom">Votre nom</label>
        <input type="text" name="nom" id="nom" required  />
        <label htmlFor="email">Votre email</label>
        <input type="email" name="email" id="email" required  />
        <label htmlFor="subject">Sujet</label>
        <input type="text" name="subject" id="subject" required  />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5" cols="33"  required  ></textarea>
        <input type="submit" className="contact__submit" value="Contactez-nous" />
      </form>
    </div>
  </div>
);

export default Contact;
