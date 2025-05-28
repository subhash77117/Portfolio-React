import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../assets/contact-two.avif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!validateEmail(formData.email)) {
      toast.warning("Enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.warning("Enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mwpogkre", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully Thank you!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-black text-yellow-400 py-16 px-4 md:px-8 lg:px-20 mt-3"
      id="contact"
    >
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Parallax Image */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <img
            src={contact}
            alt="Contact"
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
        </Tilt>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <h2 className="text-4xl font-bold mb-6 text-yellow-300">
            Let's Talk
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black text-yellow-200 border border-yellow-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black text-yellow-200 border border-yellow-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black text-yellow-200 border border-yellow-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-black text-yellow-200 border border-yellow-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-400"
            } text-black font-bold px-6 py-3 rounded transition`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          <p className="text-sm mt-2 text-yellow-300 italic">
            🔒 I respect your privacy. Your info stays safe with me.
          </p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
