import React from 'react';
import '../App.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-inner">
        <div className="home-text">
          <h1>
            Hello, I'm <span>MAHA VIDHYA SRI</span>
          </h1>
          <p>Python • Java • React • HTML/CSS • MySQL • MongoDB</p>
          <a href="/Resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
        <div className="home-avatar">
          <img src="/profile.jpg" alt="Your Photo" className="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
