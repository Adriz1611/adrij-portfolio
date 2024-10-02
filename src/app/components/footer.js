import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 shadow-lg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-blue-600 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 underline-offset-4 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 text-blue-600 tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-gray-700">
                Email:{" "}
                <Link
                  href="mailto:adrijbhadra@gmail.com"
                  className="hover:underline text-blue-600"
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
            <h3 className="text-lg font-semibold mb-6 text-blue-600 tracking-wide">
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
                  className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-110 duration-300"
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
