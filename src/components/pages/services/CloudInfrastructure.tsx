import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";

const CloudInfrastructure = () => {
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
            Cloud Infrastructure Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Build a robust, scalable, and secure cloud infrastructure with our expert solutions. We help businesses leverage the power of cloud computing to drive innovation, reduce costs, and achieve operational excellence.
          </p>
        </div>
      </section>

      {/* What Are Cloud Infrastructure Solutions Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-techblue-700 dark:text-techblue-300 text-center">
            What Are Cloud Infrastructure Solutions?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              Cloud infrastructure solutions provide the fundamental building blocks for modern digital operations, offering scalable computing resources, storage, and networking capabilities delivered as services over the internet. Our solutions enable businesses to build, deploy, and manage applications with unprecedented flexibility and efficiency.
            </p>
            <p>
              We combine industry-leading cloud platforms with best practices in architecture, security, and performance optimization to deliver robust infrastructure solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
            Our Cloud Infrastructure Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cloud Migration */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Cloud Migration</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Lift and Shift
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Replatforming
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Refactoring
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Hybrid Cloud
                </li>
              </ul>
            </div>

            {/* Cloud Architecture */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Cloud Architecture</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Microservices
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Serverless Design
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Containerization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Multi-cloud Strategy
                </li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Cloud Security</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Identity Management
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Data Protection
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Compliance
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Threat Detection
                </li>
              </ul>
            </div>

            {/* Cloud Optimization */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Cloud Optimization</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Cost Management
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Performance Tuning
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Resource Scaling
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Monitoring & Analytics
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
            {/* E-commerce */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">E-commerce</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>High-traffic Platforms</li>
                <li>Inventory Management</li>
                <li>Payment Processing</li>
                <li>Customer Analytics</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Patient Data Systems</li>
                <li>Medical Imaging</li>
                <li>Telemedicine</li>
                <li>HIPAA Compliance</li>
              </ul>
            </div>

            {/* Financial Services */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Financial Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Transaction Processing</li>
                <li>Risk Management</li>
                <li>Compliance Systems</li>
                <li>Real-time Analytics</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>IoT Integration</li>
                <li>Supply Chain Management</li>
                <li>Quality Control</li>
                <li>Predictive Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-techblue-700 dark:text-techblue-300 text-center">
            Our Cloud Infrastructure Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Assessment & Planning</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Infrastructure Audit</li>
                <li>Cloud Strategy</li>
                <li>Cost Analysis</li>
                <li>Migration Planning</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Implementation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Infrastructure Setup</li>
                <li>Security Configuration</li>
                <li>Service Migration</li>
                <li>Performance Testing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4 text-techblue-700 dark:text-techblue-300">Optimization & Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Performance Tuning</li>
                <li>Cost Optimization</li>
                <li>24/7 Monitoring</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-techblue-500 to-tealteal-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Infrastructure?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discover how our cloud infrastructure solutions can transform your business operations and drive growth.
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

export default CloudInfrastructure; 