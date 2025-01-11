import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';

export function Interships() {
  const experiences = [
    {
      company: "ITOI Technologies",
      role: "Backend Developer Intern",
      period: "JUNE 2019 - OCT 2019",
      description: "Learned API's",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Internship</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}