import React from "react";
import { Link } from "react-router-dom";

const educationData = [
  {
    degree: "Post Graduation",
    institution: "Ranchi University ,Ranchi",
    course: "Master of Computer Applications (MCA)",
    result: "CGPA: 8.7",
  },
  {
    degree: "Graduation",
    institution: "Marwari College, Ranchi University",
    course: "Bachelor of Science in Information Technology (BSC-IT)",
    result: "CGPA: 8.2",
  },
  {
    degree: "Intermediate",
    institution: "Baldev Sahu College, Lohardaga",
    course: "Science (PCM)",
    result: "Percentage: 63%",
  },
];

const Education = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4">
      {/* Spinning blurred circle background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin 
                w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] 
                bg-amber-300 rounded-full opacity-20 blur-2xl z-0"
      />

        {/* Twinkling Star Background */}
        <div className="absolute inset-0 z-0">
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

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-colors bg-black bg-opacity-80"
            >
              <h3 className="text-xl font-semibold mb-1 text-amber-400 uppercase">
                {edu.degree}
              </h3>
              <p className="text-md text-gray-300 mb-1">
                <span className="font-medium text-white">Institution:</span>{" "}
                {edu.institution}
              </p>
              <p className="text-md text-gray-300 mb-1">
                <span className="font-medium text-white">Course:</span>{" "}
                {edu.course}
              </p>
              <p className="text-md text-gray-300">
                <span className="font-medium text-white">Result:</span>{" "}
                {edu.result}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/about"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded font-semibold hover:bg-amber-500 transition"
          >
            Know About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
