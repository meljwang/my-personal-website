import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footnote = () => {
  return (
    <div className="flex justify-center items-center gap-4 text-lg font-medium py-4">
      <a
        href="https://www.linkedin.com/in/melvinjwang/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-800 hover:text-gray-600"
      >
        <FaLinkedin className="mr-1" />
        LinkedIn
      </a>
      <span className="text-gray-800">|</span>
      <a
        href="melvinjwang@u.nus.edu"
        className="flex items-center text-gray-800 hover:text-gray-600"
      >
        <FaEnvelope className="mr-1" />
        Email
      </a>
      <span className="text-gray-800">|</span>
      <a
        href="https://github.com/meljwang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-800 hover:text-gray-600"
      >
        <FaGithub className="mr-1" />
        GitHub
      </a>
    </div>
  );
};

export default Footnote;
