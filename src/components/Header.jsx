import React from "react";

const Header = () => (
  <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-pink-500 text-white py-10 shadow-lg rounded-lg mx-4 mt-4">
    <div className="max-w-6xl  mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Varisdeep Singh
        </h1>
        <p className="text-xl mt-2 text-blue-100">Web developer</p>
      </div>
      <div className="mt-6 sm:mt-0">
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </header>
);

export default Header;
