import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="images/own_logo.png" alt="Logo" className="h-12 w-12 filter invert" />
            <span className="font-bold text-lg text-white">Sadaiyappan Subramani</span>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://github.com/SanthoshNumentica" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/sadaiyappan-subramani-7186a61b1/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:sadaiyappancse@gmail.com">
              <Mail className="h-5 w-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sadaiyappan Subramani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
