"use client"

import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 shadow-lg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-black tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", sectionId: "home-section" },
                { name: "Skills", sectionId: "skills-section" },
                { name: "Projects", sectionId: "projects-section" },
                {
                  name: "Resume",
                  link: "https://drive.google.com/file/d/1p60-7TBTrx6h2bDrROr9PPcpBmqDjcxt/view?usp=sharing",
                },
                { name: "Contact", sectionId: "contact-section" },
              ].map((item, index) =>
                item.link ? (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ) : (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-gray-700 hover:text-black transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-black tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-gray-700">
                Email:{" "}
                <Link
                  href="mailto:adrijbhadra@gmail.com"
                  className="hover:underline text-black"
                >
                  adrijbhadra@gmail.com
                </Link>
              </p>
              <p className="text-gray-700">
                Location: New Delhi
                <br /> Country: India
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-black tracking-wide">
              Connect
            </h3>
            <div className="flex justify-center space-x-6">
              {[
                {
                  href: "https://www.linkedin.com/in/adrijbhadra/",
                  label: "LinkedIn",
                  icon: <Linkedin size={24} />,
                },
                {
                  href: "https://github.com/Adriz1611",
                  label: "GitHub",
                  icon: <Github size={24} />,
                },
                {
                  href: "https://www.instagram.com/bhadra.it.is/",
                  label: "Instagram",
                  icon: <Instagram size={24} />,
                },
              ].map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-800 hover:text-black transition-transform transform hover:scale-110 duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Adrij Bhadra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
