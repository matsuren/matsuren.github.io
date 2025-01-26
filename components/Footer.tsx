import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-600">© {currentYear} Ren Komatsu</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/matsuren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ren-komatsu-bb4326118"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
