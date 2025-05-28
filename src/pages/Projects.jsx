import React, { useState } from "react";
import mtm from "../assets/mtm.png";
import vm from "../assets/vm.png";
import ably from "../assets/ably.png";
import food from "../assets/food.png";
import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";
import tiktaktoe from "../assets/tik-tak-toe.png";
import worldAtlas from "../assets/worldAtls.png";

const projects = [
  {
    id: 1,
    title: "Vasumatha Softech company in Ranchi",
    src: vm,
    category: "Live",
    description:
      "Developed for Vasumatha Softech, where I work as a full-stack developer..",
    liveLink: "https://vasumathasoftech.com/",
    codeLink: "",
  },
  {
    id: 2,
    title: "Ably Infotech – Marketing Agency Website",
    src: ably,
    category: "See",
    description:
      "Designed and developed this marketing agency website from scratch using React and Tailwind for Ably Infotech.",
    liveLink: "https://ablyinfotech.live/",
    codeLink: "",
  },
  {
    id: 3,
    title: "Malti Tel Mill Website",
    src: mtm,
    category: "Live",
    description:
      "Developed for a Ranchi-based cold-pressed oil company. Clean UI and mobile-friendly layout to showcase their products.",
    liveLink: "https://maltitelmill.in/",
    codeLink: "",
  },
  {
    id: 4,
    title: "My First React Portfolio",
    src: portfolio,
    category: "See",
    description:
      "My first React.js and Tailwind CSS portfolio project. Built to showcase skills and recent development work online.",
    liveLink: "https://subhashgupta.netlify.app/",
    codeLink: "https://github.com/subhash77117/portfolio",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Game",
    src: tiktaktoe,
    category: "More",
    description:
      "Fun and simple React-based tic-tac-toe game with reset and win-check logic, styled using Tailwind CSS.",
    liveLink: "https://subhash-tic-tac-toe.netlify.app/",
    codeLink: "https://github.com/subhash77117/tic-tac-toe--game",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    src: weather,
    category: "More",
    description:
      "Real-time weather updates using OpenWeatherMap API with clean UI for location-based temperature and climate details.",
    liveLink: "https://subhashkrgupta-weather-app.netlify.app/",
    codeLink: "https://github.com/subhash77117/weather_app",
  },
  {
    id: 7,
    title: "Food Delivery UI",
    src: food,
    category: "See",
    description:
      "Responsive user interface for a food delivery app. Built with React and styled-components for smooth user experience.",
    liveLink: "https://food-search-app-blush.vercel.app/",
    codeLink: "https://github.com/subhash77117/foodSearchApp",
  },
  {
    id: 8,
    title: "World Atlas Explorer",
    src: worldAtlas,
    category: "More",
    description:
      "Explore countries with their flags, population, and maps using public APIs. Interactive and educational world atlas UI.",
    liveLink: "https://world-atlas-app.vercel.app/",
    codeLink: "https://github.com/subhash77117/WorldAtlasApp",
  },
];

const categories = ["All", "Live", "See", "More"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <section className="bg-black text-white px-4 py-12 md:px-16 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-4 mt-12 text-amber-400 underline">Projects</h2>
      <p className="text-center text-gray-100 max-w-xl mx-auto mb-8">
        Here are some of the projects I've worked on. Click on a card to see more details.
      </p>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-3xl mx-auto  mb-8">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px2 py-2 rounded-full border-2 ${
        selectedCategory === cat
          ? "bg-amber-400 text-black"
          : "border-amber-200 text-white"
      } transition cursor-pointer font-semibold`}
    >
      {cat === "See" ? "See Projects" : cat + " Projects"}
    </button>
  ))}
</div>



      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-300 text-black rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl group p-3"
          >
            <div className="overflow-hidden h-48">
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-800 rounded-md"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>
              <button className="mt-2 px-4 py-2 bg-amber-400 text-white text-sm rounded hover:bg-amber-300">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-black rounded-lg p-6 w-[90%] max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4 text-gray-700">{selectedProject.description}</p>
            <div className="flex justify-end gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-500 text-white rounded-md"
              >
                Live
              </a>
              {selectedProject.codeLink && (
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-500"
                >
                  Code Source
                </a>
              )}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 block text-right text-sm text-gray-500 bg-amber-400 p-3 cursor-pointer hover:bg-amber-300 rounded-2xl px-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
    </section>
  );
}
