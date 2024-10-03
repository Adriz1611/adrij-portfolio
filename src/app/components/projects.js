"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Changespark Foundation",
    description:
      "This is for a new budding NGO about women empowerment and child education.",
    image: "/project1.png",
    githubLink: "https://github.com/Adriz1611/changespark-website",
    hostedLink: "https://changespark.in",
  },
  {
    title: "Vanilla Collab",
    description:
      "A web application that enhances collaboration and productivity for remote teams. Provides features such as real-time messaging, file sharing, task management, and video conferencing to streamline communication and coordination among team members working from different locations.",
    image: "/project2.png",
    githubLink: "https://github.com/Adriz1611/Vanilla_collab",
    hostedLink: "https://vanilla-collab.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website.",
    image: "/project3.png",
    githubLink: "https://github.com/Adriz1611/adrij-portfolio",
    hostedLink: "https://adrij-portfolio.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 tracking-wide">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border-[1px] border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-t-xl"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
                <div className="flex justify-between items-center space-x-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-semibold text-sm bg-transparent hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-semibold text-sm bg-transparent hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
