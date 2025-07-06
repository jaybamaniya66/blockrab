import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-techblue-900/10 via-tealteal-900/10 to-techblue-800/10 dark:from-techblue-900/20 dark:via-tealteal-900/20 dark:to-techblue-800/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-techblue-800 dark:text-techblue-200">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Create stunning, responsive websites and web applications that engage users and drive business growth. Our expert team delivers modern, scalable solutions built with cutting-edge technologies and best practices.
          </p>
        </div>
      </section>

      {/* What Are Web Development Solutions Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-techblue-700 dark:text-techblue-300 text-center">
            What Are Web Development Solutions?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Web development solutions encompass the creation, deployment, and maintenance of websites and web applications that deliver exceptional user experiences. Our solutions combine modern design principles, responsive layouts, and robust functionality to create digital experiences that engage users and achieve business objectives.
            </p>
            <p>
              We leverage the latest web technologies and frameworks to build fast, secure, and scalable websites that perform optimally across all devices and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Custom Websites */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Custom Websites</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Corporate Websites
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Portfolio Sites
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Landing Pages
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Blog Platforms
                </li>
              </ul>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">E-commerce Solutions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Online Stores
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Payment Integration
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Inventory Management
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Order Processing
                </li>
              </ul>
            </div>

            {/* Web Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Web Applications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Progressive Web Apps
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Single Page Apps
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Real-time Applications
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Interactive Dashboards
                </li>
              </ul>
            </div>

            {/* CMS Development */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">CMS Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  WordPress Development
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Custom CMS
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Content Migration
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Plugin Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Retail */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Retail</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>E-commerce Stores</li>
                <li>Product Catalogs</li>
                <li>Customer Portals</li>
                <li>Inventory Systems</li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Real Estate</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Property Listings</li>
                <li>Virtual Tours</li>
                <li>Agent Portals</li>
                <li>Booking Systems</li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Education</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Learning Platforms</li>
                <li>Course Websites</li>
                <li>Student Portals</li>
                <li>Educational Resources</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Medical Websites</li>
                <li>Patient Portals</li>
                <li>Appointment Systems</li>
                <li>Health Information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Design & Planning</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>Content Strategy</li>
                <li>Technical Planning</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Frontend Development</li>
                <li>Backend Integration</li>
                <li>Database Setup</li>
                <li>API Development</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Launch & Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Quality Testing</li>
                <li>Performance Optimization</li>
                <li>Deployment</li>
                <li>Ongoing Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-techblue-500 to-tealteal-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your web development project and start creating your digital presence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/9664954421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-techblue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="mailto:support@blockrabbits.com"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment; 