"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  if (!isMounted) {
    return null; // Or return a loading spinner if you prefer
  }

  const navItems = [
    { name: "Home", sectionId: "home-section" },
    { name: "Skills", sectionId: "skills-section" },
    { name: "Projects", sectionId: "projects-section" },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1p60-7TBTrx6h2bDrROr9PPcpBmqDjcxt/view?usp=sharing",
    },
    { name: "Contact", sectionId: "contact-section" },
  ];

  return (
    <nav className="bg-gradient-to-br from-gray-100 to-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="text-black text-2xl font-bold">ADRIJ</a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) =>
              item.link ? (
                <a
                  href={item.link}
                  key={index}
                  className="text-base font-medium text-gray-900 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-base font-medium ${
                    router.pathname === `/${item.sectionId}`
                      ? "text-blue-600"
                      : "text-gray-900"
                  } hover:underline`}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) =>
              item.link ? (
                <a
                  href={item.link}
                  key={index}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
