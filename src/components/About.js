import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a full stack developer who enjoys turning ideas into clean,
        responsive interfaces and robust back‑end logic. I work comfortably
        across the stack, from designing user flows and UI to connecting APIs
        and databases.
      </p>
      <p>
        Along with hands‑on project work, I have completed a web development
        internship at Inetz Technologies in Chennai and been involved in event
        coordination. I have also finished certifications in AI and Full Stack
        development, and I am always exploring new tools and best practices to
        build reliable, scalable applications.
      </p>
      <ul className="about-list">
        <li>Focus on building clear, accessible user experiences.</li>
        <li>
          Interest in modern full stack development, from React UIs to
          database‑driven back‑end services.
        </li>
        <li>Comfortable working in collaborative, Git‑based workflows.</li>
      </ul>
    </section>
  );
}

export default About;
