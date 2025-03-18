"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["Home","About" ,"Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-blue-400 cursor-pointer"
        >
          <Link href="#home" scroll={true}>
            Albin John
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#60A5FA" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                scroll={true}
                className="hover:text-blue-400 transition duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white py-4"
        >
          <ul className="flex flex-col items-center gap-6 text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  scroll={true}
                  className="hover:text-blue-400 transition duration-300"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
