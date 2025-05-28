import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "bg-[#9595a20d] bg-opacity-90 backdrop-blur-2xl shadow-lg" : "bg-transparent"
        } px-4 sm:px-6 md:px-10 fixed top-0 left-0 w-full z-50 h-20 font-bold text-white transition-colors duration-300`}
      >
        <div className="flex justify-between items-center mx-auto max-w-7xl h-full">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold flex items-center space-x-1 border-amber-50 border-1">
            <span className="text-amber-400">&lt;</span>
            <span className="text-white">Subhash Kumar</span>
            <span className="text-amber-400">/&gt;</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
            <Link to="/project" className="hover:text-yellow-300">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/01subhashkumar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6 hover:text-yellow-300" />
            </a>
            <a
              href="https://github.com/subhash77117"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6 hover:text-yellow-300" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="h-8 w-8" />
            ) : (
              <GiHamburgerMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-4/5 sm:w-3/4 max-w-xs h-full text-white bg-[#3f3f4d0d] bg-opacity-90 backdrop-blur-2xl shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-40`}
      >
        <div className="flex flex-col justify-center mt-24 space-y-6 px-6 text-lg">
          <Link to="/" onClick={toggleMenu} className="hover:bg-amber-400 px-4 py-2 rounded-md text-center">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="hover:bg-amber-400 px-4 py-2 rounded-md text-center">
            About
          </Link>
          <Link to="/project" onClick={toggleMenu} className="hover:bg-amber-400 px-4 py-2 rounded-md text-center">
            Projects
          </Link>
           <Link to="/contact" onClick={toggleMenu} className="hover:bg-amber-400 px-4 py-2 rounded-md text-center">
            contact
          </Link>
          <a
            href="https://www.linkedin.com/in/01subhashkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <FaLinkedin className="h-6 w-6 hover:text-yellow-300" />
          </a>
          <a
            href="https://github.com/subhash77117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <FaGithub className="h-6 w-6 hover:text-yellow-300" />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
