import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Leadership</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{exp.role}</h3>
              <p className="text-xl text-white mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
