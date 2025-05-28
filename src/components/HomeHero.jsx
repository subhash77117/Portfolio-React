
import Tilt from 'react-parallax-tilt';
import { IoSettingsOutline, IoCodeWorking } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

const HomeHero = () => {
  const data = [
    {
      title: "Deeper Skillset",
      logo: <GiSkills className="text-4xl sm:text-5xl mb-4" />,
      desc: "I possess in-depth technical expertise and problem-solving skills, allowing me to handle complex challenges effectively."
    },
    {
      title: "Creative Work",
      logo: <IoCodeWorking className="text-4xl sm:text-5xl mb-4" />,
      desc: "I approach every project with innovation and originality, aiming to deliver visually compelling and functional solutions."
    },
    {
      title: "Strong Dedication",
      logo: <IoSettingsOutline className="text-4xl sm:text-5xl mb-4" />,
      desc: "I am fully committed to every task I take on, ensuring consistent effort, responsibility, and timely completion."
    }
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl w-full">
        {data.map((item, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={9000}
            scale={1.05}
            transitionSpeed={1000}
            className="rounded-xl bg-white/40 backdrop-blur-md p-6 sm:p-8 text-center text-white hover:shadow-xl transition duration-300 ease-in-out border-2 border-yellow-600 shadow-2xl group"
          >
            <div className="group-hover:text-amber-500">{item.logo}</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-amber-300 leading-relaxed">{item.title}</h3>
            <p className="text-base sm:text-lg text-gray-300 mt-4">{item.desc}</p>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
