"use client";

import Image from "next/image";
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

  if (!isMounted) {
    return null; // Or return a loading spinner if you prefer
  }

  const navItems = ["Home", "Skills", "Projects", "Resume", "Contact"];
  const resumeLink =
    "https://drive.google.com/file/d/1p60-7TBTrx6h2bDrROr9PPcpBmqDjcxt/view?usp=sharing"; // Replace with your actual drive link

  return (
    <nav className="bg-gradient-to-br from-gray-100 to-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="/logo2.png" alt="logo" width={60} height={100} />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                href={item === "Resume" ? resumeLink : `/${item.toLowerCase()}`}
                key={index}
                legacyBehavior
              >
                <a
                  className={`text-base font-medium ${
                    router.pathname === `/${item.toLowerCase()}`
                      ? "text-blue-600"
                      : "text-gray-900"
                  } hover:underline`}
                  target={item === "Resume" ? "_blank" : "_self"}
                  rel={item === "Resume" ? "noopener noreferrer" : ""}
                >
                  {item}
                </a>
              </Link>
            ))}
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
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Resume" ? resumeLink : `/${item.toLowerCase()}`
                  }
                  legacyBehavior
                >
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === `/${item.toLowerCase()}`
                        ? "text-blue-600"
                        : "text-gray-900"
                    } hover:bg-gray-100`}
                    target={item === "Resume" ? "_blank" : "_self"}
                    rel={item === "Resume" ? "noopener noreferrer" : ""}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
