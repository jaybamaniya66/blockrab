import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate  = useNavigate();
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-black/10 to-gray-600/10 text-black dark:text-white rounded-full">
            Our Services
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-white">
            About <span className="text-black dark:text-white">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6"></div>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a complete suite of technology services designed to transform your business and drive digital innovation.
          </p> */}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side image */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Our Team"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <span className="text-4xl font-bold text-black dark:text-white">5+</span>
                  <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
              We Are <span className="text-black dark:text-white">Blockrabbits</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2020, Blockrabbits has emerged as a leading provider of premium tech services. 
              Our team of experts brings together diverse skills and deep industry knowledge to deliver 
              solutions that not only meet but exceed our clients' expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-black dark:bg-white p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Client-Focused Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your goals become our mission as we work to deliver results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-600 dark:bg-gray-400 p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Technical Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">We maintain the highest standards in every project we undertake.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-400 dark:bg-gray-600 p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Timely Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">We respect deadlines and ensure on-time project completion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black dark:bg-white p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Global Perspective</h3>
                  <p className="text-gray-600 dark:text-gray-300">We bring international expertise to solve local challenges.</p>
                </div>
              </div>
            </div>

            <Button 
            onClick={() => navigate('/about')}            
            className="primary-button">Discover Our Journey</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
