// src/Certifications.js
import React from "react";

export function Certifications() {
  const certifications = [
    {
      "name": "Microsoft Copilot AI",
      "credential": "https://learn.microsoft.com/api/achievements/share/en-us/SadaiyappanSubramani-2018/WZLWYTFN?sharingId=932536458A20472B",
      "organization": "Microsoft",
      "date": "January 2025",
      "image": "images/copilot.jpg",
      "description": "Earned the Microsoft Copilot Certification, showcasing proficiency in leveraging AI-powered tools to enhance productivity and automate workflows. Gained expertise in utilizing Microsoft Copilot to streamline tasks and integrate AI solutions seamlessly into business processes. Demonstrates strong skills in AI-driven innovation and automation."
    },{
      "name": "Microsoft Power BI Desktop for Business Intelligence",
      "credential": "https://www.udemy.com/certificate/UC-657bec8f-c61d-4fc7-810d-21472de5bec1",
      "organization": "Udemy",
      "date": "January 2025",
      "image": "images/power_bi.jpg",
      "description": "This certification showcases expertise in utilizing Microsoft Power BI Desktop to analyze data, create insightful reports, and make data-driven business decisions effectively."
    },
    {
      name: "Microsoft 365 Certified Developer",
      credential: "https://drive.google.com/drive/folders/1f8iQ335rpPBszLV60YCEr7Sw7q_PrRJf?usp=sharing",
      organization: "Microsoft",
      date: "January 2025",
      image: "images/365.png",
      description: "This certification demonstrates proficiency in developing, implementing, and optimizing solutions using Microsoft 365 technologies.",
    },
    {
      name: "MERN Stack Developer",
      credential: "https://www.udemy.com/certificate/UC-2d4760ad-0e9a-462c-be2b-7f5dae7f6c0a/",
      organization: "Udemy",
      date: "December 2024",
      image: "images/mern.jpg",
      description: "This certification validates expertise in building modern, full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    },
    {
      name: "REST API Developer",
      credential: "https://www.hackerrank.com/certificates/c012d9db96eb",
      organization: "Hacker Rank",
      date: "July 2024",
      image: "images/rest_api.png",
      description: "This certification showcases skills in designing, building, and consuming RESTful APIs to support scalable and secure application development.",
    },
    {
      name: "SQL Advanced",
      credential: "https://www.hackerrank.com/certificates/8164f28ede5e",
      organization: "Hacker Rank",
      date: "July 2024",
      image: "images/sql.png",
      description: "This certification highlights advanced SQL skills, including data querying, optimization, and management for complex databases.",
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