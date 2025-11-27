import React from 'react';
import '../App.css';

const highlights = [
  {
    title: 'Web Development Internship – Inetz Technologies, Chennai',
    description:
      'Completed an internship focused on web development, gaining hands‑on experience in building and improving real‑world web pages and components.',
  },
  {
    title: 'College Debugging Competitions – 2× Winner',
    description:
      'Won two college‑level debugging contests by quickly identifying and fixing issues in existing codebases under time pressure.',
  },
  {
    title: 'Certifications in AI & Full Stack Development',
    description:
      'Completed structured certification programmes that strengthened my foundations in AI concepts and full stack web development.',
  },
];

function Achievements() {
  return (
    <section id="achievements">
      <h2>Highlights & Achievements</h2>
      <div className="achievements-grid">
        {highlights.map((item) => (
          <div className="achievement-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
