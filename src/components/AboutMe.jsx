import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiNextdotjs } from 'react-icons/si';

const AboutMe = () => {
  const techStack = [
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'PHP', icon: <FaPhp className="text-purple-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  ];

  const services = [
    "Frontend Development (React & Tailwind)",
    "Backend Development (PHP / Node.js)",
    "Responsive Web Design",
    "Portfolio & Business Website Creation",
    "SEO and Performance Optimization"
  ];

  return (
    <section className="relative bg-black text-white px-6 py-16 min-h-screen overflow-hidden">
      
      {/* Twinkling Star Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 relative z-10">
        {/* Left: Description */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-amber-300 mb-2">What I Do</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-amber-300 mb-2">Why Work With Me?</h3>
            <p className="text-gray-300 leading-relaxed">
              I’m detail-oriented, reliable, and passionate about clean code and smooth UI/UX.
              Whether you're a business looking for a modern website or a company in need of a full-stack developer,
              I can deliver a complete and polished solution.
            </p>
          </div>

          <a
            href="/subhashKumarDEC.pdf"
            download
            className="bg-yellow-400 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition text-center inline-block"
          >
            View Resume
          </a>
        </div>

        {/* Right: Tech Stack Icons */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl border border-amber-500 w-32 h-32 hover:scale-105 duration-100"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-sm text-center text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
