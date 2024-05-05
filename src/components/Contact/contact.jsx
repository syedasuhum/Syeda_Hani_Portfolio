import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div class="title-section">
          <h2 class="title">Contact</h2>
          <span class="border-icon">
          <span class="title-icon"></span>
          </span>
       </div>
      <div className="container contact__container">
        
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
          {message && <span>Thanks, I will reply soon</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
