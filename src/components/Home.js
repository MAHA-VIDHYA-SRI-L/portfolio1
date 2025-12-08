import React from 'react';
import '../App.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-inner">
        <div className="home-text">
          <h1>
            Hello, I'm
            <br />
            <span>MAHA VIDHYA SRI LINGESWARAN</span>
          </h1>
          <p>Full Stack Developer | Python • Java • React • HTML/CSS • MySQL • MongoDB</p>
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
