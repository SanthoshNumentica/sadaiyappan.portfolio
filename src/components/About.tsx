import React from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tech Lead & Senior Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600">
            Proven leader in API development with over 5 years of experience managing a team of developers. Expertise in overseeing the complete API lifecycle, ensuring high performance, and optimizing integrations for secure data handling. Committed to client success and continuous learning, with a focus on mentoring junior developers and enhancing skills in full-stack application development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}