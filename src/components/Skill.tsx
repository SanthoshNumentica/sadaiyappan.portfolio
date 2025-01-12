import { FaClipboardCheck, FaCommentsDollar, FaJsSquare, FaLightbulb, FaSync, FaUsers } from 'react-icons/fa';
import { Si365Datascience, SiAmazon, SiBuymeacoffee, SiCodeigniter, SiLaravel, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';

const Skills = () => {
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
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
