// src/Certifications.js
import React from "react";

export function Certifications() {
  const certifications = [
    {
      name: "Microsoft 365 Certified Developer",
      credential: "https://drive.google.com/drive/folders/1f8iQ335rpPBszLV60YCEr7Sw7q_PrRJf?usp=sharing",
      organization: "Microsoft",
      date: "January 2025",
      image: "images/365.png", // Replace with your actual image path
      description: "This certification demonstrates proficiency in data analysis, machine learning, and statistical modeling.",
    },
    {
      name: "Merrn Stack Developer",
      credential: "https://www.udemy.com/certificate/UC-2d4760ad-0e9a-462c-be2b-7f5dae7f6c0a/",
      organization: "Udemy",
      date: "December 2024",
      image: "images/mern.jpg", // eplace with your actual image path
      description: "The PMP certification validates the skills and knowledge necessary to lead and direct projects.",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                <p className="mt-2 text-gray-600">
                  <b>Credential:</b> <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Certificate</a>
                </p>
                <p className="mt-2 text-gray-600"><b>Issuing Organization:</b> {cert.organization}</p>
                <p className="mt-2 text-gray-600"><b>Date Issued:</b> {cert.date}</p>
                <p className="mt-2 text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}