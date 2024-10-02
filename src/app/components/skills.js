"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "MongoDB", src: "/mongo.png", color: "#4DB33D" },
  { name: "Express.js", src: "/express.png", color: "#000000" },
  { name: "React.js", src: "/react.png", color: "#61DAFB" },
  { name: "Node.js", src: "/node.png", color: "#339933" },
  { name: "C/C++ (OOP/DSA)", src: "/c++.png", color: "#00599C" },
  { name: "Unix", src: "/unix.jpg", color: "#FF4500" },
];

const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white rounded-xl shadow-lg p-6 m-4 w-64 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
      style={{ borderTop: `4px solid ${skill.color}` }}
    >
      <div className="relative w-20 h-20 mb-4">
        <Image
          src={skill.src}
          alt={skill.name}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h2>
    </motion.div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-5xl font-extrabold mb-12 text-center text-gray-900"
        >
          Skills
        </motion.h1>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
