import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Ben John",
    position: "Founder of ",
    company: "ITOI",
    testimonial:
      "You are doing really well. Focus on the work and you will come out as a strong leader. Keep learning, stay curious, and never hesitate to embrace challenges. Success comes to those who remain dedicated and persistent.",
    link: "https://itoi.org",
  },
  {
    id: 2,
    name: "Austin Vinoth",
    position: "Head of Nagercoil ",
    company: "Zealcorps",
    testimonial:
      "It's always a pleasure to work with you! Your dedication and availability to address work challenges stand out. Even clients appreciate your prompt problem-solving skills, and I am confident you will reach great heights in your career.",
    link: "https://zealcorps.com/",
  },
  {
    id: 3,
    name: "David Associates",
    position: "Founder of ",
    company: "David Associates",
    testimonial:
      "This designer transformed our brand and helped us reach new heights! Their creativity and attention to detail are unmatched. We have seen significant growth and stronger customer engagement thanks to their exceptional work.",
    link: "https://www.davidassociates.in",
  },
  {
    id: 4,
    name: "Dr. Joephin Soundar",
    position: "Founder of ",
    company: "SIDENT",
    testimonial:
      "An exceptional talent! Their attention to detail is unmatched. They consistently exceed expectations and deliver high-quality results that resonate with the audience.",
    link: "https://sident.in",
  },
  {
    id: 5,
    name: "Dr. Joffin",
    position: "Director of ",
    company: "Indian Association of Oral Implantologists (IAOI)",
    testimonial:
      "A pleasure to work with! They brought our vision to life with creativity and professionalism. Their insights and expertise made a significant impact on our projects.",
    link: "https://iaoi.in/",
  },
  // {
  //   id: 6,
  //   name: "Jothi",
  //   position: "Head of Operations ",
  //   company: "Zealcorps",
  //   testimonial:
  //     "It's a pleasure to work with! I can see your dedication, always available to address issues and resolve them promptly. Your proactive approach and problem-solving skills are truly commendable. I would love to have someone like you in my office.",
  //   link: "https://zealcorps.com/",
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex flex-col transition-all duration-300 transform hover:bg-blue-100 hover:border-lightblue-300 hover:text-blue-800 hover:scale-105 hover:shadow-lg"
          >
            <FaQuoteLeft className="text-gray-400 mb-2" />
            <p className="flex-1 text-gray-700 italic">"{testimonial.testimonial}"</p>
            <FaQuoteRight className="text-gray-400 mt-2" />
            <h4 className="text-xl font-semibold text-gray-800 mt-2">{testimonial.name}</h4>
            <p className="text-gray-600">
              {testimonial.position || "Position unavailable"}{" "}
              {testimonial.link && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {testimonial.company || "Company website"}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
