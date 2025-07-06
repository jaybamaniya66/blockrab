// src/pages/services/DevOpsPage.tsx
import React, {useEffect} from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const DevOpsPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

 return (
  <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-black/10 via-gray-800/10 to-black/10 dark:from-white/10 dark:via-gray-200/10 dark:to-white/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          DevOps <span className="gradient-text">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Accelerate your software delivery with our comprehensive DevOps solutions. We help organizations achieve faster deployments, improved reliability, and seamless collaboration between development and operations teams.
        </p>
        {/* <img
          src="/images/devops-illustration.png"
          alt="DevOps Illustration"
          className="mx-auto w-64 md:w-96 mb-8"
        /> */}
      </div>
    </section>

    {/* What Are DevOps Solutions Section */}
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
          What Are DevOps Solutions?
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            DevOps solutions bridge the gap between software development and IT operations, enabling organizations to deliver applications and services at high velocity. Our DevOps practices combine cultural philosophies, practices, and tools that increase an organization's ability to deliver applications and services at high velocity.
          </p>
          <p>
            We implement automated pipelines, infrastructure as code, and continuous monitoring to create a seamless, efficient development and deployment process that drives business value.
          </p>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
          Our DevOps Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CI/CD Pipeline */}
          <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">CI/CD Pipeline</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Automated Testing
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Continuous Integration
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Automated Deployment
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Release Management
              </li>
            </ul>
          </div>

          {/* Infrastructure as Code */}
          <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Infrastructure as Code</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Terraform Automation
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Ansible Configuration
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                CloudFormation
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Infrastructure Versioning
              </li>
            </ul>
          </div>

          {/* Monitoring & Observability */}
          <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Monitoring & Observability</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Real-time Monitoring
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Log Management
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Performance Analytics
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Alert Management
              </li>
            </ul>
          </div>

          {/* Security & Compliance */}
          <div className="bg-white dark:bg-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Security & Compliance</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                DevSecOps Integration
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Compliance Automation
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Security Scanning
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Access Management
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
          {/* Technology */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Technology</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>SaaS Platforms</li>
              <li>Mobile Apps</li>
              <li>Cloud Services</li>
              <li>API Development</li>
            </ul>
          </div>

          {/* Financial Services */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Financial Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Banking Systems</li>
              <li>Payment Processing</li>
              <li>Risk Management</li>
              <li>Compliance Systems</li>
            </ul>
          </div>

          {/* Healthcare */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Healthcare</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Patient Systems</li>
              <li>Medical Records</li>
              <li>Telemedicine</li>
              <li>Research Platforms</li>
            </ul>
          </div>

          {/* E-commerce */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">E-commerce</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Online Stores</li>
              <li>Inventory Systems</li>
              <li>Payment Gateways</li>
              <li>Order Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-black dark:text-white text-center">
          Our DevOps Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Assessment & Planning</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Current State Analysis</li>
              <li>Tool Selection</li>
              <li>Process Mapping</li>
              <li>Strategy Development</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Implementation</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Pipeline Setup</li>
              <li>Automation Development</li>
              <li>Infrastructure Deployment</li>
              <li>Security Integration</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-black rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Optimization & Support</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Performance Tuning</li>
              <li>Continuous Monitoring</li>
              <li>Team Training</li>
              <li>Process Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-16 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your DevOps?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact us today to discover how our DevOps solutions can accelerate your software delivery and improve operational efficiency.
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

export default DevOpsPage;