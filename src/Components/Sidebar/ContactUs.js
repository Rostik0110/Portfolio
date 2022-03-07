import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('rostikshafar@gmail.com', 'template_brvybji', form.current, 'DeAi_vOD7hE6vsxII')
      .then((result) => {
        alert('Message sent)')
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form className='messageBox' ref={form} onSubmit={sendEmail}>
      <div>
        <label className='titleMessage'>Email:</label>
        <input type="email" name="email" />
      </div>     
        <label className='titleMessage'>Send message:</label>  
      <textarea className='textMessage' name="message" />
      <input className='buttonMessage' type="submit" value="Send" />
    </form>
  );
};