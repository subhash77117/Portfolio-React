import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/subhash.jpg";
import HomeHero from "../components/HomeHero";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ContactSection from "../components/ContactSection";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-black text-white px-4 sm:px-6 md:px-10 py-14 relative overflow-hidden">
        {/* Spinning Glow Background (Hidden on mobile) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-spin w-[250px] h-[230px] md:w-[300px] md:h-[300px] bg-amber-300 rounded-full opacity-20 blur-2xl z-0 hidden md:block" />

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

        {/* Main Flex Container */}
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between relative z-10 gap-10 sm:mt-20 mt-14">
          {/* Left Text Content */}
          <div
            className="md:w-1/2 w-full space-y-6 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Hi 👋, I'm <span className="text-yellow-400">Subhash Kumar</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-300">
              Full Stack Web Developer
            </h2>
            <p>
              Hey there! I'm a web developer — explore my portfolio to see how I
              turn ideas into interactive websites. 🚀
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
              <a
                href="/subhashKumarDEC.pdf"
                download
                className="bg-yellow-400 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition text-center"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition text-center"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div
            className="md:w-1/2 w-full flex justify-center"
            data-aos="fade-left"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={500}
              gyroscope={true}
              className="w-65 sm:w-64 md:w-80 lg:w-96 rounded-xl shadow-2xl"
            >
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Subhash Kumar"
                  className="rounded-2xl w-full h-auto p-2"
                />
                <div className="absolute sm:w-[385px] sm:h-[385px] w-[260px] h-[270px]  inset-0 rounded-xl ring-4 ring-yellow-500 animate-pulse opacity-20 text-center " />
              </div>
            </Tilt>
          </div>
        </div>
        {/* Spinning Glow Background (Hidden on mobile) */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-spin w-[250px] h-[250px] md:w-[150px] md:h-[150px] bg-amber-200 rounded-full opacity-20 blur-xl z-0 hidden md:block" />

        {/* Animated Stars */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-50 animate-pulse"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `spin ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <HomeHero />
      <Skills />
      <Education />
      <ContactSection />
    </>
  );
};

export default Home;
