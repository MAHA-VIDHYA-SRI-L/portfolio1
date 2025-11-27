import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am an aspiring web developer who enjoys turning ideas into clean,
        responsive interfaces. I love working across the full stack, from
        designing simple user flows to connecting APIs and databases.
      </p>
      <p>
        Along with hands‑on project work, I have completed a web development
        internship at Inetz Technologies in Chennai and been involved in event
        coordination. I have also finished certifications in AI and Full Stack
        development, and I am always exploring new tools and best practices to
        write better, more maintainable code.
      </p>
      <ul className="about-list">
        <li>Focus on building clear, accessible user experiences.</li>
        <li>Interest in modern front‑end stacks and component‑based design.</li>
        <li>Comfortable working in collaborative, Git‑based workflows.</li>
      </ul>
    </section>
  );
}

export default About;
