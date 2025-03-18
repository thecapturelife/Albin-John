"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Download } from "lucide-react";
import Image from "next/image";
import Navbar from "../Navbar/page";

const Main = () => {
  return (
    <div id="home" className="relative"> 

      <Navbar />

      <div className="flex flex-col md:flex-row items-center
                      justify-center min-h-screen
                      bg-gradient-to-r from-gray-900
                      to-black text-white px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full 
          overflow-hidden border-4 border-blue-500 shadow-lg"
        >
          <Image
            src="/albi1.jpg"
            alt="Albin John"
            width={300}
            height={300}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 md:mt-0 md:ml-10 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Hi, I&apos;m <span className="text-blue-400">Albin John</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-4 text-lg sm:text-xl text-gray-300"
          >
            Frontend Developer | UI/UX Designer | React.js & Next.js Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/projects"
              className="px-6 py-2 bg-blue-600 text-white font-semibold 
              rounded-md shadow-lg transition duration-300
               hover:bg-blue-700"
            >
              My Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/contact"
              className="px-6 py-2 bg-gray-800 text-white 
              font-semibold rounded-md shadow-lg 
              transition duration-300 hover:bg-gray-700"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/Albin John.pdf" 
              download
              className="px-6 py-2 bg-green-600 text-white 
              font-semibold rounded-md shadow-lg 
              flex items-center justify-center gap-2 transition 
              duration-300 hover:bg-green-700"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-8 flex gap-6 text-3xl justify-center md:justify-start"
          >
            <a
              href="https://github.com/thecapturelife"
              target="_blank"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/albin-john96/"
              target="_blank"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/__the_capture_life/"
              target="_blank"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
