import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DocumentIcon from '@mui/icons-material/Description';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle the modal opening and closing
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle redirection based on selected platform
  const handleSelectPlatform = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = 'https://wa.me/919384579716';
        break;
      case 'email':
        url = 'mailto:sadaiyappancse@gmail.com';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/in/sadaiyappan-subramani-7186a61b1/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/s.a.n.t.h.o.s.h.k.u.m.a.r.s/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/profile.php?id=100085374684964';
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    setIsModalOpen(false);
  };

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
            <div className="flex space-x-4 mt-6">
              <button
                onClick={toggleModal}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition duration-300 ease-in-out"
              >
                View Projects
              </a>
            </div>
            <div className="left mt-6">
              <button
                onClick={() => window.open("https://drive.google.com/drive/folders/1DbN-cPF2THPedLd30EehIICl_ynItoza?usp=sharing", "_blank")}
                className="inline-flex items-center px-6 py-3 bg-[#9B1B30] text-white rounded-lg hover:bg-[#B8293D] transition duration-300 ease-in-out blink-button"
              >
                Resume & CV
                <DocumentIcon className="ml-2 h-5 w-5" />
              </button>
            </div>


            <style jsx>{`
  @keyframes blink {
    0% {
      opacity: 1;
      background-color: #4c51bf; /* Indigo color */
    }
    50% {
      opacity: 0.5;
      background-color: #7f8bf5; /* Light Indigo color */
    }
    100% {
      opacity: 1;
      background-color: #4c51bf; /* Indigo color */
    }
  }

  .blink-button {
    animation: blink 1.5s infinite;
  }
`}</style>

          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="images/photo.jpg"
              alt="Developer workspace"
              className="rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/3">
            <h2 className="text-lg mb-4 text-center">Contact us through:</h2>
            <div className="flex flex-wrap justify-center mb-4 space-x-4">
              <button
                onClick={() => handleSelectPlatform('whatsapp')}
                className="text-green-500 hover:text-green-600 mb-2"
              >
                <FaWhatsapp size={30} />
              </button>
              <button
                onClick={() => handleSelectPlatform('email')}
                className="text-blue-500 hover:text-blue-600 mb-2"
              >
                <FaEnvelope size={30} />
              </button>
              <button
                onClick={() => handleSelectPlatform('linkedin')}
                className="text-blue-700 hover:text-blue-800 mb-2"
              >
                <FaLinkedin size={30} />
              </button>
              <button
                onClick={() => handleSelectPlatform('instagram')}
                className="text-pink-500 hover:text-pink-600 mb-2"
              >
                <FaInstagram size={30} />
              </button>
              <button
                onClick={() => handleSelectPlatform('facebook')}
                className="text-blue-600 hover:text-blue-700 mb-2"
              >
                <FaFacebook size={30} />
              </button>
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full w-full hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}