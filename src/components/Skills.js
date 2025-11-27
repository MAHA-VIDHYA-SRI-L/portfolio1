import React from 'react';
import '../App.css';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-groups">
        <div className="skills-group">
          <h3>Front‑End</h3>
          <ul className="skill-list">
            <li>HTML5 &amp; Semantic Markup</li>
            <li>CSS3, Flexbox &amp; Grid</li>
            <li>Responsive Design</li>
            <li>JavaScript (ES6+)</li>
            <li>React (basics)</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Back‑End &amp; Data</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>Node.js (basics)</li>
            <li>SQL fundamentals</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Tools &amp; Practices</h3>
          <ul className="skill-list">
            <li>Git &amp; GitHub</li>
            <li>VS Code</li>
            <li>Figma (for basic UI mockups)</li>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub logo"
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Microsoft_Excel_2013-2019_logo.svg"
              alt="Excel logo"
            />
            <span>Excel</span>
          </div>
          <div className="tech-logo-item">
            <img
              src="https://seeklogo.com/images/C/canva-logo-1D33A56B4F-seeklogo.com.png"
              alt="Canva logo"
            />
            <span>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
