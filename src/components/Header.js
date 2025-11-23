import React from 'react';
import '../App.css';

function Header({ activeSection, theme, toggleTheme }) {
  return (
    <header>
      <nav>
        <div className="sidebar-brand">
          <h2 className="logo">MVS</h2>
          <p className="sidebar-name">Maha Vidhya Sri</p>
          <p className="sidebar-role">Aspiring Web Developer</p>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="sidebar-social">
          <a
            href="mailto:mahavidhyasri209@email.com"
            className="social-pill"
            aria-label="Email"
          >
            @
          </a>
          <a
            href="https://linkedin.com/in/maha-vidhya-sri"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
            aria-label="GitHub"
          >
            gh
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
