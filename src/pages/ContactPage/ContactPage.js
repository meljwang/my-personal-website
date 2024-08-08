import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="page">
      <div className="flex flex-col items-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
          Contact Me 💬
        </h1>
        <p className="text-lg font-normal text-gray-700 mb-12">
          Feel free to connect with me on LinkedIn, send me an email, or check
          out my GitHub.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xl font-bold">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <span className="hidden sm:block text-gray-800">|</span>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaEnvelope className="mr-2" />
            Email
          </a>
          <span className="hidden sm:block text-gray-800">|</span>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
