import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <hr className="bg-amber-100 mt-1 mb-5 max-w-6xl mx-auto w-full"></hr>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side text */}
        <p className="text-[16px] sm:text-[12px] mb-4 md:mb-0">
          Developed  by <span className="font-semibold text-amber-300">Subhash Kumar</span>
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 md:mb-0 text-center sm:text-left">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link to="/" className="hover:text-yellow-400 transition-colors">Services</Link>
          <Link to="/project" className="hover:text-yellow-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </div>

        {/* Right side icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/01subhashkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/subhash77117"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-[12px] sm:text-[14px] text-gray-400">
        <p>&copy; {new Date().getFullYear()} Subhash Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
