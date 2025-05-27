import React from "react";

const About = () => (
  <section id="about" className="py-16 bg-gray-100">
    <div className="max-w-4xl mx-auto px-6 bg-white rounded-xl shadow-md p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Hardworking and motivated student in{" "}
        <span className="font-semibold text-blue-600">
          Computer software and database developement
        </span>{" "}
        and I have an experience building simple web applications using the{" "}
        <span className="font-semibold">PHP, MySql</span>.
      </p>
    </div>
  </section>
);

export default About;
