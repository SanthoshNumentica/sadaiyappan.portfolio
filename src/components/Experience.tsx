import { useState } from "react";
import { Building2 } from "lucide-react"; // Ensure Building2 is imported

export function Experience() {
  const [isOpen, setIsOpen] = useState<number | null>(null); // Set the type as number or null for toggling

  const experiences = [
    {
      company: "ITOI Technologies",
      role: "Tech Lead | Mern Stack Developer",
      period: "2019 - Present",
      description: [
        "Dedicated Team Lead and Product Engineer with over <span class='font-bold'>5 years</span> of full-stack development experience.",
        "Passionate about creating <span class='font-bold'>innovative solutions </span> and <span class='font-bold'>delivering high-quality products.</span",
        "Expertise in API design and implementation within the Node.js ecosystem.",
        "Proven track record of leading teams to success while fostering collaboration and productivity.",
        "API Design and Development: Specialized in creating well-structured, user-friendly, and documented APIs.",
        "Expertise in RESTful principles, versioning, and authentication mechanisms (e.g., OAuth, JWT).",
        "Focused on seamless integration with third-party services and improving developer experience.",
        "Leadership and Team Management: Strong advocate for fostering a collaborative and inclusive team environment.",
        "Prioritizes effective communication and teamwork to achieve project goals.",
        "Project Management and Agile Methodologies: Proficient in Agile methodologies, including Scrum and Kanban."
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "MySQL", "Postgre SQL", "Microsoft 365", "Admin Handling", "Client Handling"]
    },
    {
      company: "Flipkart",
      role: "System Engineer",
      period: "2018 - 2019",
      description: [
        "Expertise in diagnosing system issues and automating routine tasks to improve operational efficiency and reduce downtime."
      ],
      technologies: ["Microsoft Office", "Tally","Hardware Handling","Store Management"]
    }
  ];

  const toggleDescription = (index: number) => {
    setIsOpen(isOpen === index ? null : index); // Toggle logic
  };

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.period}</p>

                  {/* Initial Bullet points for the description */}
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    {exp.description.slice(0, 3).map((desc, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
                    ))}
                  </ul>

                  {/* Button to toggle description */}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="mt-2 text-indigo-600 hover:text-indigo-900"
                  >
                    {isOpen === index ? 'Hide Details' : 'Show Details'}
                  </button>

                  {/* Expanded Description as Bullet points */}
                  {isOpen === index && (
                    <div className="mt-2">
                      <ul className="text-gray-700 list-disc list-inside">
                        {exp.description.slice(3).map((desc, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
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
