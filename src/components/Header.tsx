import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">Sadaiyappan Subramani</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#experience" className="text-gray-700 hover:text-indigo-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#certifications" className="text-gray-700 hover:text-indigo-600">Certifications</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/SanthoshNumentica" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/in/sadaiyappan-subramani-7186a61b1/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            </a>
            <a href="mailto:sadaiyappancse@gmail.com">
              <Mail className="h-5 w-5 text-gray-700 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}