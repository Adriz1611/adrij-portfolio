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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
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
            {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
              <Link href={`/${item.toLowerCase()}`} key={index} legacyBehavior>
                <a
                  className={`text-base font-medium ${
                    router.pathname === `/${item.toLowerCase()}`
                      ? "text-blue-600"
                      : "text-gray-900"
                  } hover:underline`}
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
            {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase()}`} legacyBehavior>
                  <a
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      router.pathname === `/${item.toLowerCase()}`
                        ? "text-blue-600"
                        : "text-gray-900"
                    } hover:bg-gray-100`}
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
