import React from "react";

const experiences = [
  {
    role: "Front end developer",
    company: "Tech solution",
    duration: "July 2022 - April 2023",
    details:
      "Developed features and dashboards and collaborated with backend team members also.",
  },
];

const Experience = () => (
  <section id="experience" className="py-2">
    <h2 className="text-3xl font-semibold mb-4">Experience</h2>
    <div className="grid gap-6 sm:grid-cols-1">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
            {exp.role}
          </h3>
          <p className="text-md font-medium text-blue-600 dark:text-blue-400">
            {exp.company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {exp.duration}
          </p>
          <p className="text-gray-700 dark:text-gray-300">{exp.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
