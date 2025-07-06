import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white dark:bg-black rounded-lg flex items-center justify-center">
                <span className="text-black dark:text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-300 dark:from-black dark:to-gray-600 text-transparent bg-clip-text">Block</span>
                <span>Rabbits</span>
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-600 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. We specialize in DevOps, AI, cloud infrastructure, and full-stack development.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/blockrabbits" target="_blank" rel="noopener noreferrer" className="bg-white/10 dark:bg-black/10 p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/blockrabbits/" target="_blank" rel="noopener noreferrer" className="bg-white/10 dark:bg-black/10 p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/devops" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  DevOps Excellence
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/full-stack-development" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/blockchain-solutions" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
                  Blockchain Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-600">info@blockrabbits.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-600">+91 9664954421</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-600">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 dark:border-black/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 dark:text-gray-600 text-sm">
              © 2024 BlockRabbits. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors text-sm">
                About Us
              </Link>
              <a href="#privacy" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
