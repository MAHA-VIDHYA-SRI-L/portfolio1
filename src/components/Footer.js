import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h3>Let’s build something together</h3>
        <p>
          Looking for a motivated web developer intern or fresher?{' '}
          <a href="#contact" className="footer-contact-link">
            Contact me
          </a>{' '}
          or connect via the links below.
        </p>
        <div className="footer-social">
          <a
            href="mailto:mahavidhyasri209@gmail.com"
            className="footer-pill"
            aria-label="Email"
          >
            <span className="footer-icon footer-icon-email" />
          </a>
          <a
            href="https://linkedin.com/in/maha-vidhya-sri"
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="LinkedIn"
          >
            <span className="footer-icon footer-icon-linkedin" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="GitHub"
          >
            <span className="footer-icon footer-icon-github" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="Instagram"
          >
            <span className="footer-icon footer-icon-instagram" />
          </a>
        </div>
      </div>
      <p className="footer-copy">© 2025 MAHA VIDHYA SRI</p>
    </footer>
  );
}

export default Footer;
