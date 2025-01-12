import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaClipboardCheck, FaCommentsDollar, FaJsSquare, FaLightbulb, FaSync, FaUsers } from 'react-icons/fa'; // JavaScript logo
import { Si365Datascience, SiAmazon, SiBuymeacoffee, SiCodeigniter, SiLaravel, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'; // Other logos

const Skills = () => {
  const [isTechnicalOpen, setTechnicalOpen] = useState(false);
  const [isSoftOpen, setSoftOpen] = useState(false);

  const toggleTechnical = () => setTechnicalOpen(!isTechnicalOpen);
  const toggleSoft = () => setSoftOpen(!isSoftOpen);

  const technicalSkills = [
    { id: 1, skill: 'JavaScript', icon: <FaJsSquare className="h-6 w-6 inline mr-2" /> },
    { id: 2, skill: 'TypeScript', icon: <SiTypescript className="h-6 w-6 inline mr-2" /> },
    { id: 3, skill: 'Java', icon: <SiBuymeacoffee className="h-6 w-6 inline mr-2" /> },
    { id: 4, skill: 'Python', icon: <SiPython className="h-6 w-6 inline mr-2" /> },
    { id: 5, skill: 'React', icon: <SiReact className="h-6 w-6 inline mr-2" /> },
    { id: 6, skill: 'Node.js', icon: <SiNodedotjs className="h-6 w-6 inline mr-2" /> },
    { id: 7, skill: 'AWS', icon: <SiAmazon className="h-6 w-6 inline mr-2" /> },
    { id: 8, skill: 'Microsoft 365', icon: <Si365Datascience className="h-6 w-6 inline mr-2" /> },
    { id: 9, skill: 'PHP - Codeigniter', icon: <SiCodeigniter className="h-6 w-6 inline mr-2" /> },
    { id: 10, skill: 'PHP - Laravel', icon: <SiLaravel className="h-6 w-6 inline mr-2" /> },
  ];

  const softSkills = [
    { id: 1, skill: 'Team Leadership', icon: <FaUsers className="h-6 w-6 inline mr-2" /> },
    { id: 2, skill: 'Project Management', icon: <FaClipboardCheck className="h-6 w-6 inline mr-2" /> },
    { id: 3, skill: 'Problem-Solving', icon: <FaLightbulb className="h-6 w-6 inline mr-2" /> },
    { id: 4, skill: 'Communication', icon: <FaCommentsDollar className="h-6 w-6 inline mr-2" /> },
    { id: 5, skill: 'Adaptability', icon: <FaSync className="h-6 w-6 inline mr-2" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>

      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex-1 mb-2 md:mb-0">
          <button
            onClick={toggleTechnical}
            className="w-full text-left bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition flex items-center justify-between">
            <span>Technical Skills</span>
            {isTechnicalOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isTechnicalOpen ? 'auto' : 0, opacity: isTechnicalOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {technicalSkills.map((skill) => (
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