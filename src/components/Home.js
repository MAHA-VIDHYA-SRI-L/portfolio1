import React from 'react';
import '../App.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <img src="/profile.jpg" alt="Your Photo" className="avatar" />
        <h1>
          Hello, I'm <span>MAHA VIDHYA SRI</span>
        </h1>
        <p>Aspiring Web Developer</p>
        <a href="/Resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
