'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time on scroll
    threshold: 0.2, // Start animating when 20% of section is in view
  });

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      {/* Animated Graphic Blob Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] opacity-20 animate-pulse"
        >
          <g transform="translate(300,300)">
            <path d="M120,-163C149,-124,160,-74,156,-30C151,13,130,51,104,81C77,110,46,130,9,135C-29,140,-58,129,-84,108C-111,87,-135,56,-145,17C-155,-22,-150,-70,-124,-110C-97,-150,-49,-181,1,-181C51,-181,103,-150,120,-163Z" fill="#3b82f6" />
          </g>
        </svg>
      </div>

      {/* Animated Text Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center z-10"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        <p className="text-lg leading-8">
          Hi, I’m <span className="font-semibold text-blue-300">Albin John</span> from Kannur. Though I come from a non-IT background, my passion for technology and creativity led me to pursue a career in the IT industry. I successfully completed an intensive internship at <span className="font-semibold text-blue-300">Bridgeon Solutions</span>, where I gained hands-on experience in web development and refined my skills in frontend technologies.
        </p>
        <p className="text-lg leading-8 mt-4">
          I am deeply committed to continuous learning and growth, and I take pride in transforming innovative ideas into visually appealing and user-friendly digital experiences. With dedication and enthusiasm, I’m now ready to take on new challenges in the tech world.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

