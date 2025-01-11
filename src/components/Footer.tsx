import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-indigo-400" />
            <span className="font-bold text-xl">Sadaiyappan Subramani</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:john@example.com">
              <Mail className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sadaiyappan Subramani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}