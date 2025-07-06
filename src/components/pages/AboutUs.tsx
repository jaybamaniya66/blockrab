import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white animate-fade-in">
            About <span className="gradient-text">BlockRabbits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
            Our <span className="gradient-text">Mission</span> & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <svg className="w-10 h-10 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With over 5 years of experience in the technology industry, we have successfully delivered 
                hundreds of projects across various domains, helping businesses achieve their digital transformation goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-600 dark:bg-gray-400 flex items-center justify-center">
                <svg className="w-10 h-10 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Comprehensive Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From DevOps and cloud infrastructure to AI and blockchain solutions, we offer a complete 
                suite of technology services designed to meet the diverse needs of modern businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Industry Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team brings deep expertise across multiple industries including finance, healthcare, 
                e-commerce, and technology, enabling us to deliver solutions that truly understand your business context.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <svg className="w-10 h-10 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide round-the-clock support and maintenance services, ensuring your systems 
                run smoothly and efficiently at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src="/src/assests/images/jay_bamaniya.jpg" 
                  alt="Jay Bamaniya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Jay Bamaniya</h3>
              <p className="text-black dark:text-white font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading our company with over 5 years of experience in technology and business development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src="/src/assests/images/dax_bamaniya.png" 
                  alt="Dax Bamaniya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Dax Bamaniya</h3>
              <p className="text-black dark:text-white font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 dark:text-gray-300">
                Expert in DevOps, cloud architecture, and emerging technologies with a passion for innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src="/src/assests/images/keyur_bamaniya.jpg" 
                  alt="Keyur Bamaniya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Keyur Bamaniya</h3>
              <p className="text-black dark:text-white font-medium mb-3">Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack developer specializing in modern web technologies and scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black dark:bg-white flex items-center justify-center group-hover:bg-gray-600 dark:group-hover:bg-gray-400 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">Understanding your business objectives</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-600 dark:bg-gray-400 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating intuitive user experiences</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Building robust and scalable solutions</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black dark:bg-white flex items-center justify-center group-hover:bg-gray-600 dark:group-hover:bg-gray-400 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">Ensuring quality and reliability</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-600 dark:bg-gray-400 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">Deployment</h3>
              <p className="text-gray-600 dark:text-gray-300">Launching and maintaining your solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <a
            href="https://wa.me/9664954421"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 