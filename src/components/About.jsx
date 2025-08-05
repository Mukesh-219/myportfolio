import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">{personal.bio}</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Education</h4>
                <p className="text-gray-300">{personal.education.degree}</p>
                <p className="text-gray-400">{personal.education.college} • {personal.education.graduation}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Location</h4>
                <p className="text-gray-300">{personal.location}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300">
              I'm a passionate Cloud Infrastructure & DevOps Engineer with expertise in building scalable systems. 
              My journey includes research at India Internet Foundation, leading tech communities, and creating 
              impactful projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
