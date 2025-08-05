import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { socialLinks } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope size={24} />
              <span>{socialLinks.email}</span>
            </a>
            <a
              href={socialLinks.linkedin}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href={socialLinks.github}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>
          
          <p className="text-gray-400">
            Based in {portfolioData.personal.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
