import React from 'react';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one', link: '#' },
  { id: 2, title: 'Project Two', description: 'Description of project two', link: '#' },
  { id: 3, title: 'Project Three', description: 'Description of project three', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
