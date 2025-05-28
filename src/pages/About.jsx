
import about from '../assets/about.png';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';

const About = () => {
  return (
    <>
      <section className="bg-black text-white min-h-screen flex items-center px-4 py-16 relative overflow-hidden">
        
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

        {/* Glowing background  */}
        <div className="absolute top-10 right-20 left-20 animate-spin w-[300px] h-[300px] bg-amber-300 rounded-full opacity-20 blur-2xl z-0" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
        
          <div className="w-full md:w-1/2">
            <img
              src={about}
              alt="About Me"
              className="w-full h-auto mt-10 "
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-amber-400 underline">
              About Me
            </h2>
            <p className="text-lg text-gray-300 text-justify leading-relaxed">
              Hello! I'm a passionate and dedicated full-stack developer with a focus on building modern, scalable, and user-friendly web applications.
              I specialize in React, Tailwind CSS, Node.js, and MongoDB, and I love turning ideas into functional and beautiful digital products.
              <br /><br />
              With a strong eye for design and detail, I combine frontend creativity with backend logic to create seamless user experiences.
              I'm always eager to learn new technologies and take on new challenges that help me grow as a developer.
            </p>
          </div>
        </div>
      </section>
      <AboutMe/>
      <Experience />
    </>
  );
};

export default About;
