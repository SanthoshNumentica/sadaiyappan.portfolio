import React, { useState } from 'react';
import {
  FaClipboardCheck,
  FaClock,
  FaCommentsDollar,
  FaJsSquare,
  FaLightbulb,
  FaSync,
  FaThinkPeaks,
  FaUsers,
} from 'react-icons/fa';
import {
  Si365Datascience,
  SiAmazon,
  SiBuymeacoffee,
  SiCodeigniter,
  SiLaravel,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiJest,
  SiMysql,
} from 'react-icons/si';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const technicalSkills = [
    { id: 1, skill: 'JavaScript', icon: <FaJsSquare className="h-6 w-6 inline mr-2 text-yellow-500" />, description: 'Used extensively in frontend and backend development, including building dynamic web applications.' },
    { id: 2, skill: 'TypeScript', icon: <SiTypescript className="h-6 w-6 inline mr-2 text-blue-600" />, description: 'Implemented in projects to enhance type safety and scalability in complex applications.' },
    { id: 3, skill: 'Java', icon: <SiBuymeacoffee className="h-6 w-6 inline mr-2 text-red-600" />, description: 'Developed backend APIs and enterprise-level applications using Java.' },
    { id: 4, skill: 'Python', icon: <SiPython className="h-6 w-6 inline mr-2 text-blue-500" />, description: 'Used for data analysis, automation scripts, and backend development.' },
    { id: 5, skill: 'React', icon: <SiReact className="h-6 w-6 inline mr-2 text-blue-400" />, description: 'Built responsive and interactive user interfaces for web applications.' },
    { id: 6, skill: 'Node.js', icon: <SiNodedotjs className="h-6 w-6 inline mr-2 text-green-600" />, description: 'Developed scalable server-side applications and RESTful APIs.' },
    { id: 7, skill: 'AWS', icon: <SiAmazon className="h-6 w-6 inline mr-2 text-orange-500" />, description: 'Configured cloud services for hosting, databases, and CI/CD pipelines.' },
    { id: 8, skill: 'Microsoft 365', icon: <Si365Datascience className="h-6 w-6 inline mr-2 text-gray-600" />, description: 'Utilized for productivity tools, document management, and collaboration.' },
    { id: 9, skill: 'PHP - Codeigniter', icon: <SiCodeigniter className="h-6 w-6 inline mr-2 text-blue-700" />, description: 'Built secure and efficient web applications using CodeIgniter framework.' },
    { id: 10, skill: 'PHP - Laravel', icon: <SiLaravel className="h-6 w-6 inline mr-2 text-red-700" />, description: 'Developed robust web applications with Laravel, following MVC architecture.' },
    { id: 11, skill: 'Docker', icon: <SiDocker className="h-6 w-6 inline mr-2 text-blue-500" />, description: 'Used for containerization of applications to ensure consistency across environments.' },
    { id: 12, skill: 'Kubernetes', icon: <SiKubernetes className="h-6 w-6 inline mr-2 text-blue-600" />, description: 'Managed containerized applications with orchestration and scaling capabilities.' },
    { id: 13, skill: 'GraphQL', icon: <SiGraphql className="h-6 w-6 inline mr-2 text-purple-600" />, description: 'Implemented GraphQL APIs for efficient data fetching and manipulation.' },
    { id: 14, skill: 'PostgreSQL', icon: <SiPostgresql className="h-6 w-6 inline mr-2 text-blue-700" />, description: 'Utilized PostgreSQL for relational database management and complex queries.' },
    { id: 18, skill: 'MySQL', icon: <SiMysql className="h-6 w-6 inline mr-2 text-red-500" />, description: 'JavaScript testing framework used for unit and integration testing.' },
    { id: 15, skill: 'MongoDB', icon: <SiMongodb className="h-6 w-6 inline mr-2 text-green-600" />, description: 'Used MongoDB for NoSQL database solutions in various applications.' },
    { id : 16, skill: 'Git', icon: <SiGit className="h-6 w-6 inline mr-2 text-orange-500" />, description: 'Version control system for tracking changes in source code during software development.' },
    { id: 17, skill: 'Jest', icon: <SiJest className="h-6 w-6 inline mr-2 text-red-500" />, description: 'JavaScript testing framework used for unit and integration testing.' },
  ];

  const softSkills = [
    { id: 1, skill: 'Leadership Potential', icon: <FaUsers className="h-6 w-6 inline mr-2 text-purple-600" />, description: 'Led teams in completing projects efficiently, fostering collaboration and innovation.' },
    { id: 2, skill: 'Project Management', icon: <FaClipboardCheck className="h-6 w-6 inline mr-2 text-green-500" />, description: 'Successfully managed multiple projects, ensuring timely delivery and quality.' },
    { id: 3, skill: 'Problem-Solving', icon: <FaLightbulb className="h-6 w-6 inline mr-2 text-yellow-400" />, description: 'Resolved complex challenges in software development through analytical thinking.' },
    { id: 4, skill: 'Communication', icon: <FaCommentsDollar className="h-6 w-6 inline mr-2 text-blue-500" />, description: 'Effectively communicated with teams and stakeholders to align project goals.' },
    { id: 5, skill: 'Adaptability', icon: <FaSync className="h-6 w-6 inline mr-2 text-green-400" />, description: 'Quickly adjusted to new tools, technologies, and environments.' },
    { id: 6, skill: 'Time Management', icon: <FaClock className="h-6 w-6 inline mr-2 text-orange-400" />, description: 'Prioritized tasks efficiently to meet deadlines without compromising quality.' },
    { id: 7, skill: 'Critical Thinking', icon: <FaThinkPeaks className="h-6 w-6 inline mr-2 text-indigo-500" />, description: 'Applied critical thinking to evaluate options and make strategic decisions.' },
    { id: 8, skill: 'Team Collaboration', icon: <FaUsers className="h-6 w-6 inline mr-2 text-blue-600" />, description: 'Worked effectively in team settings to achieve common goals.' },
    { id: 9, skill: 'Creativity', icon: <FaLightbulb className="h-6 w-6 inline mr-2 text-yellow-300" />, description: 'Generated innovative ideas and solutions in project development.' },
    { id: 10, skill: 'Conflict Resolution', icon: <FaCommentsDollar className="h-6 w-6 inline mr-2 text-red-500" />, description: 'Mediated disputes and facilitated discussions to reach amicable solutions.' },
    { id: 11, skill: 'Emotional Intelligence', icon: <FaUsers className="h-6 w-6 inline mr-2 text-purple-500" />, description: 'Recognized and managed emotions in oneself and others to enhance interpersonal relationships.' },
    { id: 12, skill: 'Negotiation', icon: <FaClipboardCheck className="h-6 w-6 inline mr-2 text-green-600" />, description: 'Skilled in negotiating terms and agreements to benefit all parties involved.' },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Skills</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technicalSkills.map((skill) => (
            <div key={skill.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-center">
              {skill.icon}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800">{skill.skill}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill) => (
            <div key={skill.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-center">
              {skill.icon}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800">{skill.skill}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;