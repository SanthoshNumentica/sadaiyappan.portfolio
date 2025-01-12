import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: "Dr.Ben John",
    position: "Founder of ",
    company :"ITOI",
    testimonial: "You are doing really well. Focus on the work and you will come out as a strong leader",
    link: "https://itoi.org", 
  },
  {
    id: 2,
    name: "David Associates",
    company :"David Associates",
    position: "Founder of ",
    testimonial: "This designer transformed our brand and helped us reach new heights!",
    link: "https://www.davidassociates.in",
  },
  {
    id: 3,
    name: "Dr.Joephin Soundar",
    position: "Founder of ",
    company :"SIDENT",
    testimonial: "An exceptional talent! Their attention to detail is unmatched.",
    link :"https://sident.in"
  },
  {
    id: 4,
    name: "Dr.Joffin",
    company:"Indian Association of Oral Implantologists (IAOI)",
    position: "Director of ",
    testimonial: "A pleasure to work with! They brought our vision to life.",
    link:"https://iaoi.in/"
  },
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
              {testimonial.position}
              {testimonial.link && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {testimonial.company}
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
