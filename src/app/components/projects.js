"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application using React and Node.js.",
    image: "/project1.png",
    github: "https://github.com/yourusername/project-one",
    hosted: "https://projectone.com",
  },
  {
    title: "Project Two",
    description:
      "A mobile-first design portfolio built with Next.js and Tailwind.",
    image: "/project2.png",
    github: "https://github.com/yourusername/project-two",
    hosted: "https://projecttwo.com",
  },
  {
    title: "Project Three",
    description: "An AI-powered chatbot using TensorFlow and Flask.",
    image: "/project3.png",
    github: "https://github.com/yourusername/project-three",
    hosted: "https://projectthree.com",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          ref={ref}
        >
          Featured Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          ref={ref}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:text-blue-800 transition-all text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.hosted}
                    className="text-blue-600 hover:text-blue-800 transition-all text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Floating hover effect */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
