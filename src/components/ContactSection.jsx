import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center py-16 px-4 " id="contact">
      {/* Spinning Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin 
                      w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] 
                      bg-amber-300 rounded-full opacity-20 blur-2xl z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-gray-100 mb-2 text-4xl font-extrabold text-center">Contact</h1>
        <h2 className="text-3xl font-bold mb-2 mt-6 text-center">I Want to Hear from You</h2>

        <div className="flex flex-wrap justify-between w-full mt-6">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0 space-y-8">
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-amber-300 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p className="text-gray-400">Ranchi, Jharkhand</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
              <FaEnvelope className="text-amber-300 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-gray-400">guptasubhash77117@gmail.com</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
              <FaPhone className="text-amber-300 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8340794241</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mwpogkre"
            method="POST"
            className="w-full md:w-2/3 space-y-6 border border-yellow-400 p-6 rounded-xl bg-black bg-opacity-90"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-200 text-black p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-200 text-black p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="bg-gray-200 text-black p-4 rounded w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here"
              required
              className="bg-gray-200 text-black p-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-amber-600 cursor-pointer text-white px-6 py-3 rounded font-semibold hover:bg-amber-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
