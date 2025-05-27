import React from "react";

const projects = [
  {
    title: "Stop watch",

    technologies: ["React.js", "Express.js", "MongoDB"],
  },
  {
    title: "Portfolio",

    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => (
  <section id="projects" className="py-2">
    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
    <div className="grid gap-6 sm:grid-cols-1">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>

          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mb-3 space-y-1">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
