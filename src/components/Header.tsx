import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');
  const [activeIcon, setActiveIcon] = useState<string>(''); // To track the active icon
  const [activeSection, setActiveSection] = useState<string>(''); // To track the active section in header menu

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleIconClick = (link: string, icon: string) => {
    setSelectedLink(link);
    setActiveIcon(icon);
    setModalVisible(true);
  };

  const openLink = (newTab: boolean) => {
    if (newTab) {
      window.open(selectedLink, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = selectedLink;
    }
    setModalVisible(false);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const sections = ['about', 'experience', 'skills', 'projects', 'certifications'];

  return (
    <>
      <header className="fixed top-0 w-full bg-white/100 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center" onClick={() => window.location.reload()}>
              <img src="images/own_logo.png" alt="Logo" className="h-40 w-40" />
              <span className="font-bold text-xl">Sadaiyappan Subramani</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => handleSectionClick(section)} // Highlight section on click
                  className={`${activeSection === section ? 'text-indigo-600 font-semibold' : 'text-gray-700'}
                    hover:text-indigo-600`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleIconClick('https://github.com/SanthoshNumentica', 'github')}
                className={`focus:outline-none ${activeIcon === 'github' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
              >
                <Github className="h-5 w-5" />
              </button>
              <button
  onClick={() => handleIconClick('https://www.hackerrank.com/profile/sadaiyappancse', 'hackerrank')}
  className={`focus:outline-none ${activeIcon === 'hackerrank' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
>
  <img
    src="images/hr.png"  // Path to your PNG file
    alt="HackerRank"
    className="h-5 w-5"  // Adjust the size as needed
  />
</button>

              <button
                onClick={() => handleIconClick('https://www.linkedin.com/in/sadaiyappan-subramani-7186a61b1/', 'linkedin')}
                className={`focus:outline-none ${activeIcon === 'linkedin' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleIconClick('mailto:sadaiyappancse@gmail.com', 'mail')}
                className={`focus:outline-none ${activeIcon === 'mail' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600`}
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 space-y-4 shadow-lg max-w-sm w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setModalVisible(false)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <p className="text-gray-800 font-medium">
              Do you want to open the link in the same tab or a new tab?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => openLink(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Same Tab
              </button>
              <button
                onClick={() => openLink(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                New Tab
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
