

'use client'
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PetsFoods Online Shop",
    description: "PetsFood Online Shop is a specialized e-commerce platform designed exclusively for selling high-quality pet food products. Built with React, it offers a smooth and responsive user interface where users can browse a variety of food items for different pets including dogs, cats, birds, and more. The platform features intuitive navigation, detailed product pages, and an easy-to-use cart system to enhance the shopping experience. On the admin side, the platform includes dedicated pages for managing food items, adding or updating product details, viewing customer orders, and monitoring inventory. This ensures efficient backend control, making PetsFood Online Shop a complete solution for pet food retail management.",
    link: "https://pets-food-beige.vercel.app/",
  },
  {
    name: "Social Media App",
    description: "A fully functional social media platform built with Next.js, TypeScript, Tailwind CSS, and a powerful backend API. This application allows users to create accounts through a secure sign-up and login system. Once authenticated, users can create and share posts, interact with others through likes and comments, and manage their activity seamlessly. Key features include the ability to like/unlike posts, add comments, update or delete comments, and delete posts. The responsive UI, styled with Tailwind CSS, ensures a smooth experience across all devices. Leveraging Next.js for server-side rendering and TypeScript for type safety, the platform delivers high performance and maintainability. This app offers a clean, modern interface and real-time interactivity for a complete social media experience.",
    link: "https://usebook-social-media-app.vercel.app/",
  },
  {
    name: "Gents Beauty Parlour",
    description: "A freelance web project for a beauty parlour, designed to showcase available services, pricing, and provide easy booking options for customers. Built with a clean and responsive design, the platform features a detailed price list, service descriptions, and an intuitive interface for users to explore offerings such as hair styling, skincare, makeup, and spa treatments. The project includes a booking system (in progress) allowing clients to schedule appointments online. Additional features such as a gallery, customer testimonials, and contact details are being developed to enhance user experience. Currently 70% completed, this ongoing project aims to deliver a professional online presence for the beauty parlour, streamlining customer engagement and service visibility.",
    link: "https://sabaribeautyparlour-karuvanchal.vercel.app/",
  },
];

const Project = () => {
  return (
    <div id="projects" className="p-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} // Trigger every time in view
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
            <p className="text-gray-400 mb-5">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-600"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
