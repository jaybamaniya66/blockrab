import React, { useEffect } from "react";
import Navigation from "../../Navigation";
import { Link } from "react-router-dom";

const AIAgents = () => {
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
            AI <span className="gradient-text">Agents</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Intelligent automation solutions that transform your business operations with cutting-edge AI technology.
          </p>
        </div>
      </section>

      {/* What are AI Agents */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                What are <span className="gradient-text">AI Agents</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI Agents are intelligent software systems that can autonomously perform tasks, make decisions, 
                and interact with users and other systems. They combine machine learning, natural language processing, 
                and automation to create powerful business solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our AI Agents are designed to handle complex workflows, provide intelligent customer support, 
                automate repetitive tasks, and deliver insights that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/9664954421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button inline-flex items-center gap-2"
                >
                  Get Started
                </a>
                <Link
                  to="/contact"
                  className="secondary-button inline-flex items-center gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-black to-gray-700 dark:from-white dark:to-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Key Capabilities</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Natural Language Processing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Automated Decision Making
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Task Automation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Intelligent Data Analysis
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Multi-platform Integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Types of <span className="gradient-text">AI Agents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Service Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Customer Service Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Multi-language Support</li>
                <li>• Context Awareness</li>
                <li>• Escalation Management</li>
                <li>• Sentiment Analysis</li>
              </ul>
            </div>

            {/* Process Automation Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Process Automation Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Autonomous agents that streamline business processes and eliminate manual repetitive tasks.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Workflow Automation</li>
                <li>• Data Processing</li>
                <li>• Report Generation</li>
                <li>• System Integration</li>
              </ul>
            </div>

            {/* Analytics Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Analytics Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Data-driven agents that analyze patterns, generate insights, and provide actionable recommendations.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Predictive Analytics</li>
                <li>• Trend Analysis</li>
                <li>• Anomaly Detection</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>

            {/* Sales & Marketing Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Sales & Marketing Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Intelligent agents that optimize sales processes and enhance marketing campaigns with data-driven insights.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Lead Qualification</li>
                <li>• Campaign Optimization</li>
                <li>• Customer Segmentation</li>
                <li>• Conversion Tracking</li>
              </ul>
            </div>

            {/* Security Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Security Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proactive security agents that monitor systems, detect threats, and respond to security incidents.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Threat Detection</li>
                <li>• Incident Response</li>
                <li>• Vulnerability Assessment</li>
                <li>• Compliance Monitoring</li>
              </ul>
            </div>

            {/* Research Agents */}
            <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Research Agents</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Knowledge discovery agents that gather, analyze, and synthesize information from multiple sources.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Market Research</li>
                <li>• Competitive Analysis</li>
                <li>• Content Curation</li>
                <li>• Knowledge Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Our <span className="gradient-text">Implementation</span> Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Discovery & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your business processes, identify automation opportunities, and define clear objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Design & Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team designs and develops custom AI agents tailored to your specific business requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Testing & Training</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive testing and training ensure your AI agents perform optimally in real-world scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-black">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Deployment & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smooth deployment with ongoing support, monitoring, and continuous improvement of your AI agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Healthcare */}
            <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Patient Care Automation</li>
                <li>Medical Diagnosis Support</li>
                <li>Appointment Scheduling</li>
                <li>Health Monitoring</li>
              </ul>
            </div>

            {/* Finance */}
            <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Finance</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Fraud Detection</li>
                <li>Risk Assessment</li>
                <li>Investment Analysis</li>
                <li>Customer Service</li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">E-commerce</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Product Recommendations</li>
                <li>Inventory Management</li>
                <li>Customer Support</li>
                <li>Order Processing</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Quality Control</li>
                <li>Predictive Maintenance</li>
                <li>Supply Chain Optimization</li>
                <li>Production Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI Agents?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Transform your business operations with intelligent AI agents that work 24/7 to improve efficiency and drive growth.
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

export default AIAgents; 