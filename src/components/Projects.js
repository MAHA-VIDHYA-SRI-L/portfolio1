import React from 'react';
import '../App.css';

const projects = [
  {
    title: 'Sports Club Management System',
    description:
      'Desktop application to manage members, teams, fees and events for a sports club, with a simple GUI and database integration.',
    tags: ['Python', 'MySQL', 'Tkinter'],
  },
  {
    title: 'E‑Commerce Website',
    description:
      'Multi-page e‑commerce site with product listing, cart experience and basic order flow to simulate a real online store.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Medical Chatbot',
    description:
      'Python‑based chatbot to answer basic medical and health‑related queries, guiding users with symptom‑based responses.',
    tags: ['Python', 'NLP (basic)'],
  },
  {
    title: 'Student Management Chatbot',
    description:
      'Chatbot for handling student information queries such as attendance, basic records and FAQs, backed by a MySQL database.',
    tags: ['Python', 'MySQL'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio that showcases my projects, skills, achievements and contact details with a modern dark/light theme.',
    tags: ['React', 'CSS'],
  },
  {
    title: 'SafetySphere – Disaster Awareness Platform',
    description:
      'Web application that spreads awareness among students about disaster management using clear content, visuals and simple interactions.',
    tags: ['Python', 'HTML', 'CSS'],
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-carousel">
        <div className="projects-track">
          {[...projects, ...projects].map((project, index) => (
            <div className="project-card" key={project.title + index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag + index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
