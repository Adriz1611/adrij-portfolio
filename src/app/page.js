import Navbar from "@/app/components/navbar";
import Skills from "@/app/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg1.png)" }}
      >
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-black w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
                  Full Stack Developer with
                  <br className="hidden sm:inline" />
                  Passion for DevOps.
                </h1>
                <p className="text-sm sm:text-base md:text-lg mt-4 uppercase leading-relaxed">
                  I'm Adrij Bhadra, a sophomore Full Stack Development
                  aficionado at SRM IST. Immersed in the intricacies of Web3 and
                  the synergies between DevOps and MLOps, my journey is one of
                  pioneering innovation, synergistic collaborations, and
                  exponential technological advancement.
                </p>

                {/* Social Media Links */}
                <div className="mt-6 space-x-4">
                  <a
                    href="#"
                    className="text-2xl sm:text-3xl hover:text-gray-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="text-2xl sm:text-3xl hover:text-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                  <Image
                    src="/adrij.jpeg"
                    alt="Adrij Bhadra"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Component */}
      <Skills />
    </div>
  );
}
