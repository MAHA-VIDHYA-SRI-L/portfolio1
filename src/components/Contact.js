import React from 'react';
import '../App.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        If you would like to collaborate, discuss an opportunity or just say
        hello, feel free to send me a message.
      </p>
      <form
        className="contact-form"
        action="mailto:mahavidhyasri209@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <div className="form-row">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
        </div>
        <textarea
          rows="4"
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit" className="btn contact-btn">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
