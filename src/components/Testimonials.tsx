// Testimonials.js
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: "David Associates",
    position: "Founder of David Associates",
    testimonial: "This designer transformed our brand and helped us reach new heights!",
  },
  {
    id: 2,
    name: "Dr.Joephin Soundar",
    position: "Founder of SIDENT",
    testimonial: "An exceptional talent! Their attention to detail is unmatched.",
  },
  {
    id: 3,
    name: "Dr.Joffin",
    position: "Director of Indian Association of Oral Implantologists (IAOI)",
    testimonial: "A pleasure to work with! They brought our vision to life.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md flex flex-col">
            <FaQuoteLeft className="text-gray-400 mb-2" />
            <p className="flex-1 text-gray-700 italic">"{testimonial.testimonial}"</p>
            <FaQuoteRight className="text-gray-400 mt-2" />
            <h4 className="text-xl font-semibold text-gray-800 mt-2">{testimonial.name}</h4>
            <p className="text-gray-600">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;