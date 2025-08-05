import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, socialLinks } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-cyan-400">{personal.fullname}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {personal.title}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {personal.bio}
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href={socialLinks.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaGithub size={32} />
            </a>
            <a href={socialLinks.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FaEnvelope size={32} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
