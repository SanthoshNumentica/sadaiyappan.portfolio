import React from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Tele Doctor",
      description: "Currently developing a web application connecting rural individuals with medical consultations",
      image: "images/tele.png",
      technologies: ["Next.js", "Nest.js", "Postgre SQL","Agile Methododlogy"],
      live: "https://teledoctor.life",
    },
    {
      title: "Give Charity",
      description: "Developed a web application aimed at facilitating charitable donations and managing donor accounts",
      image: "images/give_charity.png",
      technologies: ["Angular", "Nest.js", "Razorpay", "MongoDB"],
      live: "https://givecharity.org",
    },
    {
      title: "Career Journey",
      description: "Developed a web application to assist users in navigating and growing their IT careers",
      image: "images/career_journey.png",
      technologies: ["Angular", "Nest.js", "MongoDB","Agile Methododlogy"],
      live: "https://careerjourney.org",
    },
    {
      title: "Whatsapp Sender",
      description: "Developed a web application to manage many whatsapp with features",
      image: "images/wasender.png",
      technologies: ["React", "Nest.js", "mySQL","Agile Methododlogy"],
      live: "https://acs.agoo.in",
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
