import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="group relative bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white">
      {/* Background decoration */}
      {/* <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-black/10 to-gray-600/10 dark:from-white/10 dark:to-gray-400/10 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div> */}
      
      {/* Icon */}
      <div className="mb-6 text-3xl text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      {/* Link */}
      <Link
        to={link}
        className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-100 transition"
      >
        Learn More →
      </Link>
      
      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-black to-gray-600 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
