// src/components/SkillsDropdown.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import logos
import { FaJsSquare } from 'react-icons/fa'; // JavaScript logo
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiAmazon } from 'react-icons/si'; // Other logos
import { FaUsers, FaClipboardCheck, FaLightbulb, FaComments, FaSync, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for soft skills and dropdown
import StarRating from './star.tsx';

const Skills = () => {
  const [isTechnicalOpen, setTechnicalOpen] = useState(false);
  const [isSoftOpen, setSoftOpen] = useState(false);

  const toggleTechnical = () => setTechnicalOpen(!isTechnicalOpen);
  const toggleSoft = () => setSoftOpen(!isSoftOpen);

  const technicalSkills = [
    { id: 1, skill: 'JavaScript', level: 5, icon: <FaJsSquare className="h-6 w-6 inline mr-2" /> },
    { id: 2, skill: 'TypeScript', level: 4, icon: <SiTypescript className="h-6 w-6 inline mr-2" /> },
    { id: 3, skill: 'Java', level: 3, icon: <span className="h-6 w-6 inline mr-2">☕</span> }, // Using a coffee emoji as a placeholder for Java
    { id: 4, skill: 'Python', level: 4, icon: <SiPython className="h-6 w-6 inline mr-2" /> },
    { id: 5, skill: 'React', level: 5, icon: <SiReact className="h-6 w-6 inline mr-2" /> },
    { id: 6, skill: 'Node.js', level: 5, icon: <SiNodedotjs className="h-6 w-6 inline mr-2" /> },
    { id: 7, skill: 'AWS', level: 4, icon: <SiAmazon className="h-6 w-6 inline mr-2" /> },
    // Add more skills as needed
  ];

  const softSkills = [
    { id: 1, skill: 'Team Leadership & Mentorship', icon: <FaUsers className="h-6 w-6 inline mr-2" /> },
    { id: 2, skill: 'Agile/Scrum Project Management', icon: <FaClipboardCheck className="h-6 w-6 inline mr-2" /> },
    { id: 3, skill: 'Problem-Solving & Analytical Thinking', icon: <FaLightbulb className="h-6 w-6 inline mr-2" /> },
    { id: 4, skill: 'Effective Communication', icon: <FaComments className="h-6 w-6 inline mr-2" /> },
    { id: 5, skill: 'Adaptability & Continuous Learning', icon: <FaSync className="h-6 w-6 inline mr-2" /> },
    // Add more skills as needed
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>

      {/* Skills Dropdowns */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        {/* Technical Skills Dropdown */}
        <div className="flex-1 mb-2 md:mb-0">
          <button
            onClick={toggleTechnical}
            className="w-full text-left bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition flex items-center justify-between"
          >
            <span>Technical Skills</span>
            {isTechnicalOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isTechnicalOpen ? 'auto' : 0, opacity: isTechnicalOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid -cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-center">
                  {skill.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{skill.skill}</h3>
                    <StarRating rating={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills Dropdown */}
        <div className="flex-1">
          <button
            onClick={toggleSoft}
            className="w-full text-left bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition flex items-center justify-between"
          >
            <span>Soft Skills</span>
            {isSoftOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isSoftOpen ? 'auto' : 0, opacity: isSoftOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {softSkills.map((skill) => (
                <div key={skill.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex items-center">
                  {skill.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">{skill.skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;