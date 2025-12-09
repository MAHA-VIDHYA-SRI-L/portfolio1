import React from 'react';
import '../App.css';

// Use public URL path instead of a static import to avoid build-time failures if the asset is missing
const gitLogo = (process.env.PUBLIC_URL || '') + '/assets/git-logo.png';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-groups">
        <div className="skills-group">
          <h3>Front‑End</h3>
          <ul className="skill-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React (basics)</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Back‑End &amp; Data</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>Node.js (basics)</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Tools &amp; Practices</h3>
          <ul className="skill-list">
            <li>Git &amp; GitHub</li>
            <li>VS Code</li>
            <li>Canva</li>
            <li>Excel</li>
          </ul>
        </div>
      </div>
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-logo-row">
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python logo"
            />
            <span>Python</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java logo"
            />
            <span>Java</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              alt="C logo"
            />
            <span>C</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5 logo"
            />
            <span>HTML5</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3 logo"
            />
            <span>CSS3</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL logo"
            />
            <span>MySQL</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB logo"
            />
            <span>MongoDB</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React logo"
            />
            <span>React</span>
          </div>
          <div className="tech-logo-item">
            <img
              src={gitLogo}
              alt="GitHub logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
              }}
            />
            <span>GitHub</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code logo"
            />
            <span>VS Code</span>
          </div>
          <div className="tech-logo-item">
            <div className="tech-logo-circle excel-circle">X</div>
            <span>Excel</span>
          </div>
          <div className="tech-logo-item">
            <div className="tech-logo-circle canva-circle">C</div>
            <span>Canva</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
