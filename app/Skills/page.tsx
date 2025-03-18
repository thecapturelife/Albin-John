"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaVuejs, FaFigma 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiRedux, SiNextdotjs, 
  SiAdobephotoshop, SiTypescript 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, glow: "shadow-orange-500" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, glow: "shadow-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" />, glow: "shadow-cyan-500" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" />, glow: "shadow-yellow-500" },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" />, glow: "shadow-blue-400" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" />, glow: "shadow-purple-500" },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-5xl" />, glow: "shadow-purple-400" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" />, glow: "shadow-gray-500" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" />, glow: "shadow-blue-600" },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-5xl" />, glow: "shadow-green-500" },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-5xl" />, glow: "shadow-pink-500" },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-300 text-5xl" />, glow: "shadow-blue-300" },
];

type Skill = {
  name: string;
  icon: JSX.Element;
  glow: string;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`p-8 bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center transition-all duration-300 hover:scale-110 hover:${skill.glow}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {skill.icon}
      <p className="mt-3 text-xl font-semibold">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="p-12 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
