
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_y2aq8xx",
        "template_rvl9hib",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "08Qe7tMaYH2GzP8LG"
      );
      console.log("✅ Email sent:", result);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      if (error && typeof error === "object" && "text" in error) {
        console.error("❌ EmailJS Error:", (error as { text?: string }).text);
      } else {
        console.error("❌ EmailJS Error:", error);
      }
      alert("❌ Failed to send message. See console.");
    } finally {
      setIsSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="contact" className="p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white flex justify-center items-center">
      <motion.div
        className="w-full max-w-xl bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          variants={inputVariants}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <motion.input
            variants={inputVariants}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <motion.input
            variants={inputVariants}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <motion.textarea
            variants={inputVariants}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            rows={5}
            required
          ></motion.textarea>

          <motion.button
            type="submit"
            className={`p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-lg text-white font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 ${
              isSending ? "cursor-not-allowed opacity-70" : ""
            }`}
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            whileTap={{ scale: isSending ? 1 : 0.95 }}
            disabled={isSending}
            variants={inputVariants}
          >
            {isSending ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                ⏳ Sending...
              </motion.span>
            ) : (
              "Send Message 🚀"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
