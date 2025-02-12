"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Skills from "@/app/components/skills";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import ContactForm from "./components/contactform";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
      <Navbar />
      <div className="w-full min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-16 md:py-16 pt-[100px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="w-full md:w-1/2 mb-8 md:mb-0"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
              >
                <motion.h1
                  className="text-3xl md:text-6xl font-bold uppercase leading-tight mb-4 mt-10 md:mt-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Innovating the Future: Full Stack & DevOps
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-base md:text-xl mt-4 leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Greetings! I'm Adrij Bhadra, a sophomore at SRM IST with an
                  insatiable curiosity for Full Stack Development and DevOps. My
                  journey is defined by:
                </motion.p>
                <ul className="text-[12px] md:text-sm list-disc list-inside mt-2 space-y-2">
                  <li>
                    Building responsive web applications with modern
                    technologies
                  </li>
                  <li>Exploring the synergies of DevOps</li>
                  <li>
                    Driving innovation through cutting-edge development
                    practices
                  </li>
                  <li>
                    Building scalable, efficient, and robust software solutions
                  </li>
                </ul>

                <motion.div className="mt-6 space-x-4" variants={fadeIn}>
                  <motion.a
                    href="#"
                    className="text-2xl sm:text-3xl hover:text-green-300 transition-colors inline-block"
                    aria-label="LinkedIn"
                    whileHover="hover"
                    variants={socialIconVariants}
                  >
                    <i className="ri-linkedin-fill"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-2xl sm:text-3xl hover:text-green-300 transition-colors inline-block"
                    aria-label="GitHub"
                    whileHover="hover"
                    variants={socialIconVariants}
                  >
                    <i className="ri-github-line"></i>
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 hidden md:block">
                  {/* Image */}
                  <Image
                    src="/adrij.jpeg"
                    alt="Adrij Bhadra"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-black rounded-full"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToSkills}
        >
          <ChevronDown size={32} className="animate-bounce text-black" />
        </motion.div>
      </div>

      <motion.div
        id="skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        id="projects-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        id="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
