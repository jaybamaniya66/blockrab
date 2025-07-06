import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const FullStackDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Full-Stack <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We build comprehensive web and mobile applications from concept to deployment, delivering scalable solutions that drive business growth and user engagement.
          </p>
        </div>
      </section>

      {/* What is Full-Stack Development Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
            What is Full-Stack Development?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Full-stack development encompasses both frontend and backend development, creating complete web applications that handle everything from user interface to database management. Our full-stack solutions provide seamless user experiences while ensuring robust backend functionality.
            </p>
            <p>
              We leverage modern technologies and best practices to build applications that are scalable, maintainable, and performant across all platforms and devices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Our Full-Stack Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  React, Angular, Vue.js Applications
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Responsive Web Design
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Progressive Web Apps (PWA)
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  User Experience Optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Cross-browser Compatibility
                </li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Backend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Node.js, Python, Java APIs
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  RESTful & GraphQL Services
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Microservices Architecture
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Authentication & Authorization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Performance Optimization
                </li>
              </ul>
            </div>

            {/* Database Solutions */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Database Solutions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  SQL & NoSQL Databases
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Database Design & Optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Data Migration & Integration
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Backup & Recovery Systems
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Data Security & Compliance
                </li>
              </ul>
            </div>

            {/* API Development */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">API Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  RESTful API Design
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  GraphQL Implementation
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  API Documentation
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Third-party Integrations
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  API Testing & Monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* E-commerce */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">E-commerce</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Online Marketplaces</li>
                <li>Payment Processing</li>
                <li>Inventory Management</li>
                <li>Order Tracking Systems</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Patient Portals</li>
                <li>Telemedicine Platforms</li>
                <li>Medical Records Systems</li>
                <li>Appointment Scheduling</li>
              </ul>
            </div>

            {/* Financial Services */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Financial Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Banking Applications</li>
                <li>Investment Platforms</li>
                <li>Payment Gateways</li>
                <li>Financial Analytics</li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Education</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Learning Management Systems</li>
                <li>Student Portals</li>
                <li>Online Course Platforms</li>
                <li>Assessment Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Planning & Design</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Requirements Analysis</li>
                <li>UI/UX Design</li>
                <li>Architecture Planning</li>
                <li>Technology Stack Selection</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Agile Development</li>
                <li>Code Review</li>
                <li>Continuous Integration</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Testing & Deployment</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Automated Testing</li>
                <li>Performance Testing</li>
                <li>Security Audits</li>
                <li>Production Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Full-Stack Application?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how our full-stack development expertise can bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/9664954421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="mailto:support@blockrabbits.com"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white dark:border-black text-white dark:text-black font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullStackDevelopment; 