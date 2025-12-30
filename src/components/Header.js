import React from 'react';
import '../App.css';

function Header({ activeSection, theme, toggleTheme }) {
  return (
    <header>
      <nav>
        <div className="brand-block">
          <h2 className="logo">PORTFOLIO</h2>
          <div>
            <p className="sidebar-name"></p>
          </div>
        </div>
        <ul className="nav-links">
          {activeSection === 'home' && (
            <li>
              <a href="#home" className="nav-link active">Home</a>
            </li>
          )}
          {activeSection === 'about' && (
            <li>
              <a href="#about" className="nav-link active">About</a>
            </li>
          )}
          {activeSection === 'skills' && (
            <li>
              <a href="#skills" className="nav-link active">Skills</a>
            </li>
          )}
          {activeSection === 'projects' && (
            <li>
              <a href="#projects" className="nav-link active">Projects</a>
            </li>
          )}
          {activeSection === 'contact' && (
            <li>
              <a href="#contact" className="nav-link active">Contact</a>
            </li>
          )}
        </ul>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
