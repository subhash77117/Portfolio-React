import React from "react";

const Experience = () => {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-10 py-14 relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 z-10 relative">
        Education and Experience
      </h2>

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

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row z-10 relative">
        {/* Left - Education */}
        <div className="w-full md:w-1/2 space-y-6 pr-4">
          <h3 className="text-2xl font-semibold text-yellow-400 border-b border-gray-600 pb-2">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold">MCA - Ranchi University, Ranchi</h4>
              <p className="text-gray-400">2021 - 2023</p>
              <p className="text-gray-400">8.0 CGPA</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">B.Sc IT - Marwari College, Ranchi</h4>
              <p className="text-gray-400">2018 - 2021</p>
              <p className="text-gray-400">7.6 CGPA</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Intermediate - JAC Board</h4>
              <p className="text-gray-400">2015 - 2017</p>
              <p className="text-gray-400">63%</p>
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="hidden md:flex justify-center items-stretch px-4">
          <div className="w-1 bg-yellow-500 h-full rounded-full"></div>
        </div>

        {/* Right - Experience */}
        <div className="w-full md:w-1/2 space-y-6 pl-4 mt-10 md:mt-0">
          <h3 className="text-2xl font-semibold text-yellow-400 border-b border-gray-600 pb-2">
            Experience
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold">Full Stack Developer Intern - Vasumatha Softech</h4>
              <p className="text-gray-400">Feb 2025 - Present</p>
              <p className="text-sm text-gray-400">
                Developing scalable full-stack solutions using React, Tailwind CSS, Node.js, Express, MongoDB, and PHP.
                Integrated REST APIs and maintained Git-based collaboration via GitHub.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Frontend Developer - Oasis Infobyte</h4>
              <p className="text-gray-400">2023 - 2024</p>
              <p className="text-sm text-gray-400">
                Built and deployed responsive websites for local businesses using HTML, CSS, JavaScript, and Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
