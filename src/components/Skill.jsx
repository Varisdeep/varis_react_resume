import React from "react";

const skills = [
  {
    title: "Web Technologies",
    description:
      "Proficient in building modern web interfaces and backend systems using PHP, MySQL, HTML, CSS, and Web Development principles.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Web Development"],
  },
];

const Skills = () => (
  <section id="skills" className="py-2">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <div className="grid gap-6 sm:grid-cols-1">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {skill.description}
          </p>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
            {skill.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
