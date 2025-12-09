import React from 'react';
import '../App.css';

// Profile image with error handling
const ProfileImage = () => {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/300x300?text=Profile+Image';
  };
  
  return (
    <img 
      src={process.env.PUBLIC_URL + '/assets/profile.jpg'} 
      alt="Profile" 
      onError={handleError}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '4px solid #fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    />
  );
};

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
          <a href="./assets/Resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
        <div className="home-avatar" style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}

export default Home;
