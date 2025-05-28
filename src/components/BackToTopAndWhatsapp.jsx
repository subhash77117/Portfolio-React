import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const BackToTopAndWhatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "918340794241"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-2 right-2 flex flex-col items-center space-y-3 z-50">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={` cursor-pointer p-3 bg-amber-400 text-white rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } hover:bg-amber-300 animate-bounce`}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-green-500 animate-bounce text-white rounded-full shadow-lg hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default BackToTopAndWhatsapp;
