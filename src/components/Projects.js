import React from 'react';
import '../App.css';

const projects = [
  {
    title: 'GreenCoin – Sustainability Reward System',
    description:
      'A gamified platform encouraging eco-friendly actions, with tracking and redeemable points.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A responsive personal portfolio website to showcase my skills, projects, and contact details.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Task Tracker App',
    description:
      'A simple task management app to add, update, and track daily tasks and progress.',
    tags: ['React', 'Hooks'],
    demo: '#',
    code: '#',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link demo-link"
                >
                  Live demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link code-link"
                >
                  View code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
