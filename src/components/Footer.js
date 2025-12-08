import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h3>Let’s build something together</h3>
        <p>
          Looking for a motivated full stack developer or intern?{' '}
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
            <span className="footer-icon footer-icon-email">
              <FaEnvelope />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/maha-vidhya-sri-lingeswaran-241486327?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="LinkedIn"
          >
            <span className="footer-icon footer-icon-linkedin">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/MAHA-VIDHYA-SRI-L"
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="GitHub"
          >
            <span className="footer-icon footer-icon-github">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.instagram.com/2006mvs?igsh=MTl6ZmIzd2RhbGt4Mw=="
            target="_blank"
            rel="noreferrer"
            className="footer-pill"
            aria-label="Instagram"
          >
            <span className="footer-icon footer-icon-instagram">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
      <p className="footer-copy">© 2025 MAHA VIDHYA SRI</p>
    </footer>
  );
}

export default Footer;
