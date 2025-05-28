import React from 'react';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'JavaScript', level: 50 },
  { name: 'Node.js', level: 50 },
  { name: 'Express.js', level: 60 },
  { name: 'MongoDB', level: 60 },
  { name: 'Git & GitHub', level: 85 },
];

const Skills = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 relative">
      {/* Blurred background circle - visible only on sm and above */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounse 
            w-[300px] h-[300px] sm:w-[400px] sm:h-[200px] lg:w-[300px] lg:h-[300px] 
            bg-amber-300 rounded-full opacity-20 blur-2xl z-0 hidden sm:block" />

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

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-base sm:text-lg font-semibold">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4">
                <div
                  className="bg-yellow-400 h-3 sm:h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
