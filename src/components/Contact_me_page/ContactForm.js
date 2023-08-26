import React , { useRef } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5lcrum1', 'template_ix5kufe', form.current, 'esZjgPXOy7tDK1m1L')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Email Not Sent!Please Try Again!");
      });
  };

  return (
    <div id='contactform'>
    <form ref={form} onSubmit={sendEmail}>
      <input className='input_type' type="text" name="user_name" placeholder="Your name" required/>
      <br />
      <input className='input_type' type="email" name="user_email" placeholder="Your email" required/>
      <br />
      <textarea name="message" placeholder="Your message" required />
      <br />
      <input id='button' className='grow' type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactForm;