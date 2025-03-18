'use client'
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white text-white py-6 text-center">
      <motion.div
        className="container mx-auto flex flex-col items-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Albin John. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;